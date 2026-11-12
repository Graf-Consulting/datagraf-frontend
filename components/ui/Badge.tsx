export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded border border-[#467782]/20 bg-[#467782]/10 px-2 py-0.5 text-[10px] font-medium text-[#6BB6C7] ${className}`}
    >
      {children}
    </span>
  );
}
