export function PortraitPlaceholder() {
  return (
    <div
      className="relative aspect-portrait overflow-hidden border border-rule/30 bg-heritage-navy/70 p-4"
      role="img"
      aria-label="Portrait placeholder. A personal photograph has not been supplied."
    >
      <div className="absolute inset-4 border border-cream/60" />
      <svg
        className="absolute inset-0 h-full w-full text-cream"
        viewBox="0 0 400 400"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M89 400c-1-62 17-100 75-115l6-28c-25-21-39-54-36-92-17-25-4-58 13-72-1-31 27-56 58-55 27-17 55-3 64 17 28 5 44 29 38 54 21 24 16 50 2 66 0 37-14 67-38 86l6 27c57 16 76 55 75 112Z" />
      </svg>
      <span
        className="absolute top-6 left-6 font-display text-number text-vintage-red"
        aria-hidden="true"
      >
        01
      </span>
      <p className="absolute inset-x-0 bottom-10 text-center font-display text-2xl text-heritage-navy italic">
        Your portrait here
      </p>
    </div>
  );
}
