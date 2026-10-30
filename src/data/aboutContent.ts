import type { ProjectMedia } from "./projects";

export type AboutContent = {
  eyebrow: string;
  title: readonly [string, string];
  greeting: string;
  biography: readonly string[];
  portrait: ProjectMedia | null;
  approach: readonly { title: string; description: string }[];
  rhythm: string;
};

export const aboutContent: AboutContent = {
  eyebrow: "The person behind the pixels",
  title: ["Cuban roots.", "New York rhythm."],
  greeting: "Hi, I’m Arelys.",
  biography: [
    "I’m a New York City based engineer with Cuban roots. I build web experiences with React, TypeScript, and Angular, with an eye for clear interfaces and reusable components.",
    "Outside of engineering, music and dance are a big part of my life. Organizing El Solar Timbero brings those interests together with building something useful for a community.",
  ],
  // Add a supplied portrait here. Until then, render an explicitly labeled placeholder.
  portrait: null,
  approach: [
    {
      title: "Interfaces that feel clear.",
      description:
        "I design and build thoughtful, responsive interfaces that are accessible, performant, and enjoyable to use. I care about the small details, because they add up to a better experience for real people.",
    },
    {
      title: "Foundations that last.",
      description:
        "I prefer clean, maintainable code and reusable components. I aim for solutions that are easy to understand, adapt, and grow — so projects can last beyond the first launch.",
    },
  ],
  rhythm:
    "Cuban music, dance, and community are part of what makes me, me. El Solar Timbero is where I bring people together around that shared energy.",
};
