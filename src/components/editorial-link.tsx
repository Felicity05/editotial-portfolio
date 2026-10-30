import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./arrow";
import { buttonClasses, linkClasses } from "./control-styles";

type EditorialLinkProps = {
  href: string;
  button?: boolean;
  target?: string;
  rel?: string;
} & (
  | { displayText: string; children?: ReactNode }
  | { displayText?: string; children: ReactNode }
);

export function EditorialLink({
  href,
  children,
  button = false,
  target,
  rel,
  displayText,
}: EditorialLinkProps) {
  return (
    <Link
      className={button ? buttonClasses : linkClasses}
      href={href}
      target={target}
      rel={rel}
      aria-label={displayText}
    >
      {children ?? displayText} <Arrow />
    </Link>
  );
}
