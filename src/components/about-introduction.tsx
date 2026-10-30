import Link from "next/link";
import { aboutContent } from "@/data/aboutContent";
import { Rule } from "./rule";

export function AboutIntroduction() {
  return (
    <div className="pt-3 pb-6">
      <div className="mb-2 flex items-center gap-4">
        <Link href="/#work" className="shrink-0 font-serif font-semibold text-small-label tracking-edition text-vintage-red uppercase underline underline-offset-4 hover:text-ink md:text-label">
          <span aria-hidden="true">←</span> Back to featured work
        </Link>
        <Rule className="flex-1" />
      </div>
      <div className="text-center">
        <p className="mb-2 font-mono font-bold text-small-label tracking-name text-accent-red uppercase md:text-label">
          {aboutContent.eyebrow}
        </p>
        <h1 className="font-display text-about-title leading-about font-semibold tracking-display">
          {aboutContent.title[0]}
          <br />
          {aboutContent.title[1]}
        </h1>
      </div>
    </div>
  );
}
