type AnalyticsConfiguration = {
  token?: string;
  projectId?: string;
  teamId?: string;
};

type AnalyticsRequest = (
  url: URL,
  options: RequestInit & { next: { revalidate: number } },
) => Promise<Response>;

/** Reads production page views since analytics was enabled; never increments a counter. */
export async function readTotalPageViews(
  configuration: AnalyticsConfiguration,
  request: AnalyticsRequest = fetch,
): Promise<number | null> {
  const token = configuration.token?.trim();
  const projectId = configuration.projectId?.trim();
  const teamId = configuration.teamId?.trim();
  if (!token || !projectId) return null;

  const url = new URL(
    "https://api.vercel.com/v1/query/web-analytics/visits/count",
  );
  url.searchParams.set("projectId", projectId);
  if (teamId) url.searchParams.set("teamId", teamId);

  try {
    const response = await request(url, {
      headers: { Authorization: `Bearer ${token}` },
      // Authentication requests require explicit caching in this Next.js version.
      cache: "force-cache",
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) {
      console.warn(
        `[analytics] Page-view query failed (HTTP ${response.status}).`,
      );
      return null;
    }

    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || !("data" in result))
      return null;
    const data = result.data;
    if (!data || typeof data !== "object" || !("pageviews" in data))
      return null;
    const count = data.pageviews;
    return typeof count === "number" &&
      Number.isSafeInteger(count) &&
      count >= 0
      ? count
      : null;
  } catch {
    // Never expose tokens, response bodies, or provider errors to the browser/logs.
    console.warn(
      "[analytics] Page-view query unavailable or returned invalid JSON.",
    );
    return null;
  }
}
