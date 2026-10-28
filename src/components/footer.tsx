import { SocialLinks } from "./social-links";
import { Rule } from "./rule";
import { ContactControl } from "./contact-control";

export function Footer({ year }: { year: string }) {
  return (
    <footer id="contact" className="border-t-4 border-double border-rule pb-6">
      <div className="flex items-center justify-between gap-3 border-b border-rule py-2 md:flex-wrap md:gap-4">
        <h2 className="font-display text-contact-mobile leading-none font-semibold tracking-contact md:text-section">
          Have something in mind?
        </h2>
        <Rule className="hidden min-w-8 flex-1 md:block" />
        <ContactControl />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 font-mono text-micro tracking-colophon-mobile uppercase md:text-small-label md:tracking-label">
        <SocialLinks />
        <p>© {year} Arelys Alvarez</p>
      </div>
    </footer>
  );
}
