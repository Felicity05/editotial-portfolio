export function Rule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block border-t border-rule ${className}`}
    />
  );
}
