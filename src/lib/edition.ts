import "server-only";
import { readTotalPageViews } from "./vercel-analytics";

export async function getTotalVisits(): Promise<number | null> {
  return readTotalPageViews({
    token: process.env.VERCEL_ANALYTICS_TOKEN,
    projectId: process.env.VERCEL_PROJECT_ID,
    teamId: process.env.VERCEL_TEAM_ID,
  });
}

export function getEditionDate(now: Date) {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return {
    label: new Intl.DateTimeFormat("en-US", {
      ...options,
      weekday: "long",
    }).format(now),
    shortLabel: new Intl.DateTimeFormat("en-US", options).format(now),
    tinyLabel: new Intl.DateTimeFormat("en-US", {
      ...options,
      month: "short",
      day: "2-digit",
    }).format(now),
    iso: new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(now),
    year: new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
    }).format(now),
  };
}
