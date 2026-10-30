import type { getEditionDate } from "@/lib/edition";

export function EditionStrip({
  date,
  visits,
  compactDate = false,
}: {
  date: ReturnType<typeof getEditionDate>;
  visits: number | null;
  compactDate?: boolean;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-y-4 border-double border-rule py-1 font-serif text-edition-mobile leading-normal tracking-edition uppercase md:gap-4 md:text-label lg:grid-cols-[1fr_auto_1fr]">
      <p className="md:hidden">FE Engineer</p>
      <p className="hidden md:inline">Front End Engineer</p>
      <p className="text-center lg:col-span-1 lg:row-auto">
        <span className="md:hidden">NYC </span>
        <span className="hidden md:inline">New York City </span>
        <span aria-hidden="true">·</span>{" "}
        <time dateTime={date.iso}>
          <span className="md:hidden">{date.tinyLabel}</span>
          <span className="hidden md:inline lg:hidden">{date.shortLabel}</span>
          <span className="hidden lg:inline">
            {compactDate ? date.shortLabel : date.label}
          </span>
        </time>
      </p>
      <p className="text-right whitespace-nowrap">
        Vol. 1 · No.{" "}
        <span
          aria-label={
            visits === null
              ? "Visit count unavailable"
              : `${visits} total visits`
          }
        >
          {visits === null
            ? "—"
            : new Intl.NumberFormat("en-US").format(visits)}
        </span>
      </p>
    </div>
  );
}
