import assert from "node:assert/strict";
import { test } from "node:test";
import { readTotalPageViews } from "../src/lib/vercel-analytics.ts";

const configuration = { token: "test-token", projectId: "prj_test" };

for (const missing of [
  {},
  { token: "test-token" },
  { projectId: "prj_test" },
  { ...configuration, token: "  " },
]) {
  test(`missing configuration returns unavailable without an API call: ${Object.keys(missing).join(",")}`, async () => {
    let requested = false;
    assert.equal(
      await readTotalPageViews(missing, async () => {
        requested = true;
        return Response.json({ data: { pageviews: 10 } });
      }),
      null,
    );
    assert.equal(requested, false);
  });
}

test("queries lifetime production page views with server authorization and caching", async () => {
  const count = await readTotalPageViews(
    { ...configuration, teamId: "team_test" },
    async (url, options) => {
      assert.equal(url.origin, "https://api.vercel.com");
      assert.equal(url.pathname, "/v1/query/web-analytics/visits/count");
      assert.deepEqual(Object.fromEntries(url.searchParams), {
        projectId: "prj_test",
        teamId: "team_test",
      });
      assert.equal(url.searchParams.has("since"), false);
      assert.equal(url.searchParams.has("until"), false);
      assert.equal(url.searchParams.has("token"), false);
      assert.equal(options.headers.Authorization, "Bearer test-token");
      assert.equal(options.cache, "force-cache");
      assert.equal(options.next.revalidate, 300);
      assert.ok(options.signal instanceof AbortSignal);
      return Response.json({ data: { pageviews: 1250, visitors: 980 } });
    },
  );
  assert.equal(count, 1250);
});

test("personal projects omit team scope and a real zero is displayed as zero", async () => {
  const count = await readTotalPageViews(configuration, async (url) => {
    assert.equal(url.searchParams.has("teamId"), false);
    return Response.json({ data: { pageviews: 0 } });
  });
  assert.equal(count, 0);
});

for (const payload of [
  null,
  {},
  { data: null },
  { data: { visitors: 100 } },
  { data: { pageviews: "10" } },
  { data: { pageviews: -1 } },
  { data: { pageviews: 1.5 } },
  { data: { pageviews: Number.MAX_SAFE_INTEGER + 1 } },
]) {
  test(`rejects invalid counts instead of fabricating a number: ${JSON.stringify(payload)}`, async () => {
    assert.equal(
      await readTotalPageViews(configuration, async () =>
        Response.json(payload),
      ),
      null,
    );
  });
}

for (const status of [401, 403, 429, 500]) {
  test(`HTTP ${status} leaves the site available without a count`, async (context) => {
    context.mock.method(console, "warn", () => {});
    assert.equal(
      await readTotalPageViews(
        configuration,
        async () => new Response("Private provider response", { status }),
      ),
      null,
    );
  });
}

test("network failures and timeouts return unavailable", async (context) => {
  context.mock.method(console, "warn", () => {});
  for (const error of [
    new Error("Connection failed"),
    new DOMException("Request timed out", "TimeoutError"),
  ]) {
    assert.equal(
      await readTotalPageViews(configuration, async () => {
        throw error;
      }),
      null,
    );
  }
});

test("malformed JSON returns unavailable", async (context) => {
  context.mock.method(console, "warn", () => {});
  assert.equal(
    await readTotalPageViews(
      configuration,
      async () => new Response("not JSON"),
    ),
    null,
  );
});
