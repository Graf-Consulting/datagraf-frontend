export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded border border-accent/20 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent-fg ${className}`}
    >
      {children}
    </span>
  );
}
