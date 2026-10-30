export function QuoteBand() {
  return (
    <aside
      className="mb-6 bg-heritage-navy px-4 py-3 text-center text-cream md:mb-3"
      aria-label="A guiding thought"
    >
      <blockquote className="font-display text-quote-mobile leading-quote italic md:text-quote">
        A little structure. A little soul.{" "}
        <span
          className="ml-2 inline-block text-accent-star not-italic"
          aria-hidden="true"
        >
          ★
        </span>
      </blockquote>
    </aside>
  );
}
