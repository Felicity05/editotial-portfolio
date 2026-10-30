import { Rule } from "./rule";

export function SectionHeading({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display font-bold text-number-mobile leading-none text-accent-red md:text-number"
        aria-hidden="true">
        {number} /
      </span>
      <p className="shrink-0 font-serif text-small-label tracking-label uppercase md:text-label">
        {label}
      </p>
      <Rule className="ml-2 flex-1" />
    </div>
  );
}
