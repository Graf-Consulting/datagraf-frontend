import { useId } from "react";

// Mesmo desenho do favicon (app/icon.svg). O tamanho vem do className (ex.: "h-9 w-9").
export function NativMark({ className = "" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`shrink-0 rounded-[22%] ${className}`}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4DA0B2" />
          <stop offset="1" stopColor="#467782" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill={`url(#${gradientId})`} />
      <path
        d="M10.5 22.5V9.5L21.5 22.5V9.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
