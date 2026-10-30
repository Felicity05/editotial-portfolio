import { portfolioLinks } from "@/data/projects";
import { EditorialLink } from "./editorial-link";

export function ResumeLink() {
  return portfolioLinks.resume ? (
    <EditorialLink href={portfolioLinks.resume} displayText="View résumé" rel="noopener noreferrer" target="_blank"/>
  ) : (
    <span className="inline-flex flex-col text-base text-rule">
      <span>View résumé</span>
      <span className="font-mono text-small-label">Coming soon</span>
    </span>
  );
}
