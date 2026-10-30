export function TechnologyList({
  technologies,
}: {
  technologies: readonly string[];
}) {
  return (
    <ul
      className="flex list-none gap-x-3 gap-y-2 border-t border-rule pt-3 font-mono text-label leading-technologies md:max-lg:gap-x-2 md:max-lg:text-technology-tablet"
      aria-label="Technologies"
    >
      {technologies.map((technology, index) => (
        <li
          key={technology}
          className="md:max-lg:shrink-0 md:max-lg:whitespace-nowrap"
        >
          {index > 0 && (
            <span className="mr-3 md:max-lg:mr-2" aria-hidden="true">
              ·
            </span>
          )}
          {technology}
        </li>
      ))}
    </ul>
  );
}
