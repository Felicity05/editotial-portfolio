/** Joins utility groups without hiding Tailwind classes from its compiler or formatter. */
export function classes(...groups: string[]): string {
  return groups.filter(Boolean).join(" ");
}
