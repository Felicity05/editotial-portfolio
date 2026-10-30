import { Navigation } from "./navigation";
import { SkipLink } from "./skip-link";

export function Masthead() {
  return (
    <>
      <SkipLink />
      <header id="top">
        <Navigation />
        <h1 className="flex flex-wrap items-baseline justify-center font-display text-masthead-mobile leading-masthead-mobile font-semibold tracking-masthead md:flex-nowrap md:gap-masthead-gap md:text-masthead md:leading-masthead md:whitespace-nowrap">
          <span className="w-full text-center md:w-auto">Interfaces</span>
          <span className="w-full text-center md:w-auto">
            <span className="text-vintage-red">&amp;</span> rhythm.
          </span>
        </h1>
      </header>
    </>
  );
}
