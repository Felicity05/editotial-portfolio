import { classes } from "@/lib/classes";
import type { Project } from "@/data/projects";
import { MediaCaption } from "./media-caption";
import { EditorialLink } from "./editorial-link";
import { TechnologyList } from "./technology-list";
import { ProjectHeading } from "./project-heading";

const articleLayouts = {
  lead: classes("border-b-4 border-double border-rule md:col-span-2"),
  column: classes(
    "border-b-4 border-double border-rule md:border-b-0 md:odd:border-l md:odd:border-solid md:odd:pl-editorial md:even:pr-editorial",
  ),
  wide: classes(
    "mb-6 border-b-4 border-double border-rule md:col-span-2 md:mb-0 md:border-t-4 md:border-b-0",
  ),
} as const;

export function ProjectArticle({ project }: { project: Project }) {
  const fullWidth = project.layout !== "column";
  return (
    <article id={project.id} className={`min-w-0 pt-2 pb-8 md:pt-2 ${articleLayouts[project.layout]}`}
             aria-labelledby={`${project.id}-title`}>
      <ProjectHeading project={project} />
      <div className={ fullWidth
            ? "grid gap-3 md:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)] md:gap-editorial"
            : "grid gap-3" } >
        <MediaCaption media={project.media} variant={project.layout} />
        <div className={`space-y-4 text-lg leading-body px-10 md:text-body 
                ${fullWidth ? "md:self-start md:border-l md:border-rule md:pl-editorial" : ""}`} >
          <p>{project.description}</p>
          {project.detail && <p className="text-detail">{project.detail}</p>}
          <TechnologyList technologies={project.technologies} />
          {project.url && (
            <EditorialLink href={project.url}>
              {project.linkLabel}
            </EditorialLink>
          )}
        </div>
      </div>
    </article>
  );
}
