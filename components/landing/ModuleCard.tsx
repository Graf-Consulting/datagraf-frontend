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
      className="group block rounded-xl border border-overlay/[0.04] bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:bg-surface/70 hover:shadow-[0_0_40px_-10px_rgba(70,119,130,0.12)]"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-accent/10 p-3 transition-colors duration-300 group-hover:bg-accent/20">
          <Icon className="h-6 w-6 text-accent-fg" />
        </div>
        <div>
          <h3 className="font-semibold text-fg transition-colors duration-300 group-hover:text-fg-strong">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-fg-subtle transition-colors duration-300 group-hover:text-fg-muted">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
