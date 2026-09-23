export function Badge({
    children,
    className = "",
} : {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={`text-[10px] px-2 py-0.5 bg-[#467782]/10 text-[#6BB6C7] rounded font-medium border border-[#467782]/20 ${className}`}
        >
            {children}
        </span>
    )
}