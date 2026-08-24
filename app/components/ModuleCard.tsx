"use client";

import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export default function ModuleCard({ title, description, icon: Icon, href = "#" }: ModuleCardProps) {
  return (
    <a
      href={href}
      className="group block bg-[#12151C]/40 backdrop-blur-md border border-white/[0.04] rounded-xl p-6 transition-all duration-300 hover:bg-[#12151C]/70 hover:border-[#467782]/25 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)] hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#467782]/10 rounded-xl group-hover:bg-[#467782]/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-[#6BB6C7]" />
        </div>
        <div>
          <h3 className="font-semibold text-[#E2E8F0] group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-[#64748B] mt-1.5 leading-relaxed group-hover:text-[#94A3B8] transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}