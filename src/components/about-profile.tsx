import Image from "next/image";
import { aboutContent } from "@/data/aboutContent";
import { PortraitPlaceholder } from "./portrait-placeholder";
import { EditorialLink } from "./editorial-link";
import { ResumeLink } from "./resume-link";

export function AboutProfile() {
  const portrait = aboutContent.portrait;
  return (
    <section
      className="grid gap-6 pb-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-editorial"
      aria-labelledby="profile-title"
    >
      <figure className="min-w-0">
        {portrait ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            sizes="(max-width: 48rem) 92vw, 45vw"
            preload
            className="aspect-portrait w-full object-cover"
          />
        ) : (
          <PortraitPlaceholder />
        )}
        <figcaption className="mt-1 text-caption text-rule">
          <span className="mr-2 font-display font-bold text-xl text-accent-red">
            01 /
          </span>{" "}
          Arelys Alvarez{" "}
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          <span className="italic">New York City</span>
        </figcaption>
      </figure>
      <div className="flex flex-col pt-2 md:border-l md:border-rule md:pl-editorial">
        <h2 id="profile-title" className="mb-4 font-display text-about-greeting leading-display font-semibold tracking-display">
          {aboutContent.greeting}
        </h2>
        <div className="space-y-6 text-lg leading-body md:text-about-body pr-8">
          {aboutContent.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-wrap items-start gap-x-12 pb-4 text-lg uppercase md:mt-12 md:pt-4 md:text-body">
          <EditorialLink href="/#work">View my work</EditorialLink>
          <ResumeLink />
        </div>
      </div>
    </section>
  );
}
