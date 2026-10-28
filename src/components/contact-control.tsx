import { portfolioLinks } from "@/data/projects";
import { EditorialLink } from "./editorial-link";
import { Arrow } from "./arrow";
import { buttonClasses } from "./control-styles";

export function ContactControl() {
  return portfolioLinks.email ? (
    <EditorialLink href={`mailto:${portfolioLinks.email}`} button>
      Let’s talk
    </EditorialLink>
  ) : (
    <details className="relative">
      <summary className={`${buttonClasses} list-none`}>
        Let’s talk <Arrow />
      </summary>
      <p className="absolute right-0 bottom-[calc(100%+1rem)] w-72 max-w-[80vw] border border-rule bg-cream p-6 leading-body">
        Contact details coming soon. Thank you for stopping by.
      </p>
    </details>
  );
}
