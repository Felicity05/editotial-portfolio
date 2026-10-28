import { Rule } from "./rule";

export function Introduction() {
  return (
    <section className="border-b border-rule text-center py-2" aria-label="Introduction">
      <p className="font-display text-intro-mobile leading-intro font-semibold tracking-intro md:text-intro">
        Thoughtful interfaces. Built with care. Made to move.
      </p>
      <div className="mt-2 flex items-center justify-center gap-3 font-mono text-small-label tracking-label
        uppercase md:gap-4 md:text-label">
        <Rule className="w-8 md:w-16" />
        <p className="font-serif">By Arelys Alvarez</p>
        <Rule className="w-8 md:w-16" />
      </div>
    </section>
  );
}
