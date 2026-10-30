import Link from "next/link";
import { classes } from "@/lib/classes";
import { ResumeLink } from "@/components/resume-link";

const navLinkClasses = classes(
  "py-1 font-serif no-underline hover:text-accent-red aria-[current=page]:underline aria-[current=page]:decoration-vintage-red aria-[current=page]:underline-offset-4",
);

export function Navigation({
  activePage = "work",
}: {
  activePage?: "work" | "about";
}) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b-4 border-double border-rule
        font-mono text-small-label tracking-nav-mobile uppercase md:gap-4 md:text-label md:tracking-label"
      aria-label="Main navigation"
    >
      <Link
        className={`${navLinkClasses} z-99 text-caption tracking-label md:text-name md:tracking-name`}
        href="/"
      >
        <span className="md:hidden">Arelys A.</span>
        <span className="hidden md:inline">Arelys Alvarez</span>
      </Link>
      <div className="z-99 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 md:gap-8">
        <Link className={navLinkClasses} href="/#work">
          Work
        </Link>
        <Link
          className={navLinkClasses}
          href="/about"
          aria-current={activePage === "about" ? "page" : undefined}
        >
          About
        </Link>
        <a className={navLinkClasses} href="#contact">
          Contact
        </a>
        <ResumeLink />
      </div>
    </nav>
  );
}
