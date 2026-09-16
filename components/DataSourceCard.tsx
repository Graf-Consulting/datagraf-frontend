"use client";

import { LucideIcon } from "lucide-react";

interface DataSourceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  recordCount?: string;
}

export default function DataSourceCard({ name, description, icon: Icon, recordCount }: DataSourceCardProps) {
  return (
    <div className="bg-[#12151C]/30 backdrop-blur-sm border border-white/[0.04] rounded-xl p-5 transition-all duration-300 hover:bg-[#12151C]/60 hover:border-[#467782]/20 hover:shadow-[0_0_30px_-8px_rgba(70,119,130,0.1)]">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-[#467782]/10 rounded-lg">
          <Icon className="w-5 h-5 text-[#6BB6C7]" />
        </div>
        <h3 className="font-semibold text-[#E2E8F0]">{name}</h3>
      </div>
      <p className="text-sm text-[#64748B] leading-relaxed">{description}</p>
      {recordCount && (
        <p className="text-xs text-[#467782] mt-3 font-medium">{recordCount} registros</p>
      )}
    </div>
  );
}