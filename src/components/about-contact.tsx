import { portfolioLinks } from "@/data/projects";
import { EditorialLink } from "./editorial-link";
import { ContactControl } from "./contact-control";
import { ResumeLink } from "./resume-link";

export function AboutContact() {
  return (
    <section
      id="contact"
      className="grid items-center gap-5 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="font-display text-about-section leading-display font-semibold tracking-contact">
        Let’s make something thoughtful.
      </h2>
      <div className="flex flex-wrap items-start gap-5 text-lg md:flex-col md:gap-3 md:border-l md:border-rule md:pl-8">
        {portfolioLinks.email ? (
          <EditorialLink href={`mailto:${portfolioLinks.email}`}>
            Get in touch
          </EditorialLink>
        ) : (
          <ContactControl />
        )}
        <ResumeLink />
      </div>
    </section>
  );
}
