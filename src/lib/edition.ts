/** Replace with a server-side, all-time analytics query when a source is connected.
 * No analytics credentials, database, or provider exist in this starter.
 */
export async function getTotalVisits(): Promise<number | null> {
  return null;
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
    tinyLabel: new Intl.DateTimeFormat("en-US", {...options, month: "short", day: "2-digit"}).format(now),
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
