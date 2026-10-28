import { aboutMedia } from "@/data/projects";
import { MediaCaption } from "./media-caption";
import { Arrow } from "./arrow";
import { disclosureLinkClasses } from "./control-styles";

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-4 pb-3 md:grid-cols-3 md:gap-editorial"
      aria-labelledby="about-title"
    >
      <MediaCaption
        media={aboutMedia}
        variant="collage"
        className="md:col-span-2"
      />
      <div className="md:border-l md:border-rule md:pl-6">
        <h2
          id="about-title"
          className="font-display text-about-mobile leading-about font-semibold tracking-display md:text-about"
        >
          Cuban roots.
          <br />
          New York rhythm.
        </h2>
        <p className="mt-3 text-base leading-body">
          Engineer, dancer, and builder of useful things.
        </p>
        <details className="mt-2">
          <summary className={disclosureLinkClasses}>
            A little about me <Arrow />
          </summary>
          <p className="mt-4 leading-body">
            I’m Arelys, a front end engineer in New York City. I also organize
            El Solar Timbero, a Cuban music and dance social event series.
          </p>
        </details>
      </div>
    </section>
  );
}
