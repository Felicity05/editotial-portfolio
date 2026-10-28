import type { ReactNode } from "react";
import { Arrow } from "./arrow";
import { buttonClasses, linkClasses } from "./control-styles";

export function EditorialLink({
  href,
  children,
  button = false,
}: {
  href: string;
  children: ReactNode;
  button?: boolean;
}) {
  return (
    <a className={button ? buttonClasses : linkClasses} href={href}>
      {children} <Arrow />
    </a>
  );
}
