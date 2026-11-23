"use client";

import { LucideIcon } from "lucide-react";

interface DataSourceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  recordCount?: string;
}

export default function DataSourceCard({
  name,
  description,
  icon: Icon,
  recordCount,
}: DataSourceCardProps) {
  return (
    <div className="rounded-xl border border-overlay/[0.04] bg-surface/30 p-5 transition-all duration-300 hover:border-accent/20 hover:bg-surface/60 hover:shadow-[0_0_30px_-8px_rgba(70,119,130,0.1)]">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-lg bg-accent/10 p-2">
          <Icon className="h-5 w-5 text-accent-fg" />
        </div>
        <h3 className="font-semibold text-fg">{name}</h3>
      </div>
      <p className="text-sm leading-relaxed text-fg-subtle">{description}</p>
      {recordCount && (
        <p className="mt-3 text-xs font-medium text-accent">{recordCount} registros</p>
      )}
    </div>
  );
}
