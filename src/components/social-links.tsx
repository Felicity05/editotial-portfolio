import { portfolioLinks } from "@/data/projects";

export function SocialLinks() {
  const socials = [
    { label: "GitHub", url: portfolioLinks.github },
    { label: "LinkedIn", url: portfolioLinks.linkedin },
    {
      label: "Email",
      url: portfolioLinks.email ? `mailto:${portfolioLinks.email}` : null,
    },
  ];
  return (
    <ul
      className="flex list-none flex-wrap gap-4 md:gap-6"
      aria-label="Social links"
    >
      {socials.map(({ label, url }) => (
        <li key={label}>
          {url ? (
            <a className="no-underline hover:underline" href={url}>
              {label}
            </a>
          ) : (
            <span
              className="cursor-default text-rule"
              title={`${label} link coming soon`}
            >
              {label}
              <span className="sr-only"> — coming soon</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
