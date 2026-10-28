import type { getEditionDate } from "@/lib/edition";

export function EditionStrip({
  date,
  visits,
}: {
  date: ReturnType<typeof getEditionDate>;
  visits: number | null;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-2 border-y-4 border-double border-rule py-1 font-serif
                    text-edition-mobile leading-normal tracking-edition uppercase md:gap-4 md:text-label lg:grid-cols-[1fr_auto_1fr]">
      <p>Front End engineer</p>
      <p className="col-span-full row-start-2 text-center lg:col-span-1 lg:row-auto">
        New York City <span aria-hidden="true">·</span>{" "}
        <time dateTime={date.iso}>
          <span className="hidden md:inline">{date.label}</span>
          <span className="md:hidden">{date.shortLabel}</span>
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
