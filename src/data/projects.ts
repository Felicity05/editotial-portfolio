export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category?: string;
  description: string;
  detail?: string;
  technologies: readonly string[];
  media: ProjectMedia;
  url: string | null;
  linkLabel: string;
  layout: "lead" | "column" | "wide";
};

export const projects: readonly Project[] = [
  {
    id: "el-solar",
    number: "01",
    title: "El Solar Timbero",
    layout: "lead",
    description:
      "A responsive website and ticket platform for Cuban music and dance social event series I organize.",
    detail:
      "Supports free RSVPs and ticketed event registration, form validation, duplicate-registration prevention, payment handling via Stripe integration, event check in, and attendee-management workflows.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    media: {
      src: "/images/el-solar-concept.png",
      alt: "El Solar Timbero website with its illustrated logo, RSVP information, and community footer.",
      caption: "Live website · captured October 28, 2026.",
      width: 1440,
      height: 900,
    },
    url: "https://elsolartimbero.com",
    linkLabel: "Visit the project",
  },
  {
    id: "moodify",
    number: "02",
    title: "Moodify",
    layout: "column",
    description: "Mood generator playlist for Spotify.",
    technologies: ["React", "TypeScript", "Python"],
    media: {
      src: "/images/moodify-concept.png",
      alt: "Moodify’s welcome screen with a music illustration and Log In with Spotify button.",
      caption: "Live website · captured October 28, 2026.",
      width: 1440,
      height: 900,
    },
    url: "https://moodify.fun",
    linkLabel: "Visit the project",
  },
  {
    id: "component-library",
    number: "03",
    title: "Component-library work",
    layout: "column",
    description:
      "Selected components, their states, and the engineering behind them.",
    technologies: ["Angular", "TypeScript"],
    media: {
      src: "/images/components.svg",
      alt: "Illustrative UI specimen showing primary and secondary buttons, tabs, a focused email field, and checked and unchecked states.",
      caption: "Illustrative preview · not a shipped component library.",
      width: 960,
      height: 560,
    },
    url: null,
    linkLabel: "Explore the work",
  },
  {
    id: "cloud-carbon",
    number: "04",
    title: "Cloud Carbon Footprint",
    category: "Open-source contributions",
    layout: "wide",
    description: "Selected contributions to an open-source project.",
    detail:
      "My role: contributor to the project, rather than creator or owner of the product.",
    technologies: ["React", "TypeScript"],
    media: {
      src: "/images/cloud-carbon.svg",
      alt: "Concept illustration of a cloud, a bar chart, and a leaf in a dashboard frame; not a product screenshot.",
      caption: "Illustrative preview · not a product screenshot.",
      width: 1280,
      height: 400,
    },
    url: null,
    linkLabel: "Explore contributions",
  },
];

// Set verified destinations here. Null destinations never produce empty or dead links.
export const portfolioLinks: {
  email: string | null;
  github: string | null;
  linkedin: string | null;
} = {
  email: "aalva456@yahoo.com",
  github: "https://github.com/Felicity05",
  linkedin: "https://linkedin.com/in/arelysalvarez",
};

export const aboutMedia: ProjectMedia = {
  src: "/images/about-collage.png",
  alt: "Illustrative collage of New York fire escapes, a W 152 Street sign, Cuban tiles, palm leaves, and a vinyl record.",
  caption: "New York / Cuban roots · illustrative collage.",
  width: 2172,
  height: 724,
};
