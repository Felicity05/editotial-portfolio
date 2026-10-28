import { classes } from "@/lib/classes";

const navLinkClasses = classes("font-serif py-1 no-underline hover:text-vintage-red");

export function Navigation() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-double border-rule font-mono
            text-small-label tracking-nav-mobile uppercase md:gap-4 md:text-label md:tracking-label"
      aria-label="Main navigation">
      <a className={`${navLinkClasses} text-caption tracking-label md:text-name md:tracking-name`}
        href="#top">
        Arelys Alvarez
      </a>
      <div className="flex items-center gap-4 md:gap-8">
        <a className={navLinkClasses} href="#work">
          Work
        </a>
        <a className={navLinkClasses} href="#about">
          About
        </a>
        <a className={navLinkClasses} href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
