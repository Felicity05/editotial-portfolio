import Image from "next/image";
import { aboutContent } from "@/data/aboutContent";
import { aboutMedia } from "@/data/projects";
import { SectionHeading } from "./section-heading";

export function AboutRhythm() {
  return (
    <section className="border-t-4 border-double border-rule pt-2 pb-5"
      aria-labelledby="rhythm-title"
    >
      <SectionHeading number="03" label="Beyond the screen" />
      <div className="grid items-center gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <div>
          <h2
            id="rhythm-title"
            className="mb-4 font-display text-about-section leading-display font-semibold tracking-display"
          >
            A little rhythm,
            <br />
            beyond the code.
          </h2>
          <p className="text-base leading-body md:text-about-copy">
            {aboutContent.rhythm}
          </p>
        </div>
        <Image
          src={aboutMedia.src}
          alt={aboutMedia.alt}
          width={aboutMedia.width}
          height={aboutMedia.height}
          sizes="(max-width: 48rem) 92vw, 50vw"
          className="aspect-story w-full object-cover saturate-80"
        />
      </div>
    </section>
  );
}
