export function NextChapter() {
  return (
    <aside className="grid gap-3 bg-heritage-navy px-6 py-5 text-center text-cream items-center
        md:grid-cols-[auto_auto] md:justify-center md:gap-8 md:px-10 md:text-left"
      aria-label="The next chapter">
      <p className="font-display text-about-section leading-display italic">
        The next chapter.
      </p>
      <p className="text-lg leading-body md:border-l md:border-cream/60 md:pl-8 md:text-about-copy">
        Interested in thoughtful interfaces
        <br className="hidden md:block" /> and the people who build them.
      </p>
    </aside>
  );
}
