export function TechnologyList({
  technologies,
}: {
  technologies: readonly string[];
}) {
  return (
    <ul className="flex list-none gap-x-3 gap-y-2 border-t border-rule pt-3 font-mono text-label
      leading-technologies" aria-label="Technologies">
      {technologies.map((technology, index) => (
        <li key={technology}>
          {index > 0 && (
            <span className="mr-3" aria-hidden="true">
              ·
            </span>
          )}
          {technology}
        </li>
      ))}
    </ul>
  );
}
