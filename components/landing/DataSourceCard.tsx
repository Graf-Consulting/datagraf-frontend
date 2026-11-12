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
    <div className="rounded-xl border border-white/[0.04] bg-[#12151C]/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#467782]/20 hover:bg-[#12151C]/60 hover:shadow-[0_0_30px_-8px_rgba(70,119,130,0.1)]">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-lg bg-[#467782]/10 p-2">
          <Icon className="h-5 w-5 text-[#6BB6C7]" />
        </div>
        <h3 className="font-semibold text-[#E2E8F0]">{name}</h3>
      </div>
      <p className="text-sm leading-relaxed text-[#64748B]">{description}</p>
      {recordCount && (
        <p className="mt-3 text-xs font-medium text-[#467782]">{recordCount} registros</p>
      )}
    </div>
  );
}
