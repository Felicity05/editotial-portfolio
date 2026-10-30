import { aboutContent } from "@/data/aboutContent";
import { SectionHeading } from "./section-heading";

export function AboutApproach() {
  return (
    <section className="border-t-4 border-double border-rule pt-2 pb-5" aria-labelledby="approach-title">
      <SectionHeading number="02" label="How I work" />
      <h2 id="approach-title" className="mb-4 font-display text-about-section leading-display font-semibold tracking-display">
        Care in the details.
      </h2>
      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        {aboutContent.approach.map(({ title, description }, index) => (
          <div
            key={title}
            className={
              index > 0
                ? "border-t border-rule pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-8"
                : ""
            }
          >
            <h3 className="mb-3 font-display text-about-subheading leading-display font-semibold tracking-display">
              {title}
            </h3>
            <p className="text-base leading-body md:text-about-copy">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
