import type { Project } from "@/data/projects";
import { ProjectArticle } from "./project-article";

export function SelectedWork({ projects }: { projects: readonly Project[] }) {
  return (
    <section id="work" aria-label="Selected work" className="grid grid-cols-1 md:grid-cols-2"
    >{projects.map((project) => (
        <ProjectArticle key={project.id} project={project} />
      ))}
    </section>
  );
}
