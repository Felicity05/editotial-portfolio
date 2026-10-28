import type { Project } from "@/data/projects";

export function ProjectHeading({ project }: { project: Project }) {
  return (
    <header className="flex items-start gap-2 pb-1">
      <span className="font-display text-[30px] leading-normal whitespace-nowrap text-vintage-red"
        aria-hidden="true">
        {project.number} <span className="font-semibold">/</span>
      </span>
      <div className="min-w-0">
        {/*{project.category && (*/}
        {/*  <p className="mb-2 font-mono text-edition-mobile tracking-label uppercase md:text-label">*/}
        {/*    {project.category}*/}
        {/*  </p>*/}
        {/*)}*/}
        <h2 id={`${project.id}-title`} className="font-display text-project-mobile leading-display font-semibold
                tracking-display wrap-anywhere md:text-project-tablet lg:text-project">
          {project.title}
        </h2>
      </div>
    </header>
  );
}
