import { classes } from "@/lib/classes";

// Shared controls stay identical for anchors and native disclosure summaries.
export const linkClasses = classes(
  "inline-block font-serif text-link leading-normal text-vintage-red underline decoration-1 underline-offset-[0.3em] hover:text-ink",
);
export const buttonClasses = classes(
  "inline-block cursor-pointer border border-vintage-red bg-vintage-red px-3 py-2 font-display text-xl leading-normal whitespace-nowrap text-cream no-underline hover:border-ink hover:bg-ink md:px-6 md:text-button",
);
export const disclosureLinkClasses = classes(
  "inline cursor-pointer list-none text-vintage-red underline underline-offset-4",
);
