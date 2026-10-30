import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      className="absolute top-2 left-gutter z-10 translate-y-[-200%] bg-ink p-3 text-cream"
      href="#main"
    >
      Skip to content
    </Link>
  );
}
