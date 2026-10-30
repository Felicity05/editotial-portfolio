import { classes } from "@/lib/classes";
import Image from "next/image";
import type { ProjectMedia } from "@/data/projects";

const mediaClasses = {
  lead: classes("aspect-lead object-cover object-top saturate-85"),
  column: classes("aspect-column bg-cream object-contain saturate-85"),
  columnCentered: classes(
    "aspect-column bg-cream object-contain object-center saturate-85",
  ),
  wide: classes(
    "aspect-wide-mobile bg-cream object-contain saturate-85 md:aspect-wide",
  ),
  collage: classes(
    "aspect-collage-mobile object-cover saturate-80 md:aspect-collage",
  ),
} as const;

export function MediaCaption({
  media,
  variant,
  className = "",
}: {
  media: ProjectMedia;
  variant: keyof typeof mediaClasses;
  className?: string;
}) {
  const lead = variant === "lead";
  return (
    <figure className={`w-full max-w-full min-w-0 ${className}`}>
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={
          lead
            ? "(max-width: 48rem) 92vw, 60vw"
            : "(max-width: 48rem) 92vw, 45vw"
        }
        preload={lead}
        className={`block h-auto w-full max-w-full ${mediaClasses[variant]}`}
      />
      {/*<figcaption className="mt-2 text-caption leading-caption italic">*/}
      {/*  {media.caption}*/}
      {/*</figcaption>*/}
    </figure>
  );
}
