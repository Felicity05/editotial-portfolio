"use client";
import { SocialLinks } from "./social-links";
import { Rule } from "./rule";
import { ContactControl } from "./contact-control";
import {usePathname} from "next/navigation";
import {portfolioLinks} from "@/data/projects";
import {EditorialLink} from "@/components/editorial-link";
import {ResumeLink} from "@/components/resume-link";

export function Footer({ year }: { year: string; }) {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  return (
    <footer id="contact" className="pb-2">
      {isAboutPage ? (
          <div id="aboutContact" className="grid items-center gap-5 py-2 md:grid-cols-[1fr_auto] md:gap-8"
               aria-labelledby="contact-title">
              <h2 id="contact-title" className="font-display text-about-section leading-display font-semibold tracking-contact">
                  Let’s make something thoughtful.
              </h2>
              <div className="flex flex-wrap items-start gap-5 text-lg md:flex-col md:gap-3 md:border-l md:border-rule md:pl-8 md:mr-8 lg:mr-16">
                  {portfolioLinks.email ?
                      <EditorialLink href={`mailto:${portfolioLinks.email}`} displayText={ "Get in touch"}/>
                      : <ContactControl /> }
                  <ResumeLink />
              </div>
          </div> ) : (
          <div className="flex items-center justify-between border-t-4 border-double border-rule gap-3 md:flex-wrap md:gap-4">
          <h2 className="font-display text-contact-mobile leading-none font-semibold tracking-contact md:text-section">
            Have something in mind?
          </h2>
          <Rule className="hidden min-w-8 flex-1 md:block" />
          <ContactControl />
          </div>
      )}

      <div className="flex flex-wrap items-center justify-between border-t border-t-light-rule gap-4 pt-2 font-mono text-micro tracking-colophon-mobile
        uppercase md:text-small-label md:tracking-label">
        <SocialLinks />
        <p>© {year} Arelys Alvarez</p>
      </div>
    </footer>
  );
}
