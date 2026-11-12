"use client";

import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export default function ModuleCard({
  title,
  description,
  icon: Icon,
  href = "#",
}: ModuleCardProps) {
  return (
    <a
      href={href}
      className="group block rounded-xl border border-white/[0.04] bg-[#12151C]/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#467782]/25 hover:bg-[#12151C]/70 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)]"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-[#467782]/10 p-3 transition-colors duration-300 group-hover:bg-[#467782]/20">
          <Icon className="h-6 w-6 text-[#6BB6C7]" />
        </div>
        <div>
          <h3 className="font-semibold text-[#E2E8F0] transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#64748B] transition-colors duration-300 group-hover:text-[#94A3B8]">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
