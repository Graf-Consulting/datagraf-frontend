"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navigation";
import {
  Home,
  BarChart3,
  Lightbulb,
  Settings,
  HelpCircle,
  Map,
  FilePlus,
  Newspaper,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "./AuthProvider";

const navItems = [
  { href: "/hub", label: "Início", icon: Home },
  { href: "/analises", label: "Análises", icon: BarChart3 },
  { href: "/insights", label: "Insights", icon: Lightbulb },
  { href: "/clipping", label: "Clipping", icon: Newspaper },
  { href: "/odsim", label: "ODSim", icon: Map },
  { href: "/matmaker", label: "MatMaker", icon: FilePlus },
];

const footerItems = [
  { href: "/configuration", label: "Configurações", icon: Settings },
  { href: "/help", label: "Ajuda", icon: HelpCircle },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  return (
    <aside
      className={`fixed left-0 top-16 z-40 flex h-[calc(100vh-64px)] flex-col border-r border-white/[0.06] bg-[#0E0E0E] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Botão de toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-6 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.08] bg-[#151B26] text-[#64748B] transition-all hover:border-[#467782]/30 hover:text-[#94A3B8]"
        title={isCollapsed ? "Expandir" : "Retrair"}
      >
        {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </button>

      {/* Navegação principal */}
      <div className="flex-1 space-y-1 px-2 py-6">
        <p
          className={`mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-[#475569] transition-opacity duration-200 ${
            isCollapsed ? "mb-0 h-0 opacity-0" : "opacity-100"
          }`}
        >
          Principal
        </p>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center rounded-lg border py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-[#467782]/20 bg-[#467782]/10 text-[#6BB6C7]"
                    : "border-transparent text-[#94A3B8] hover:bg-white/[0.04] hover:text-white"
                } ${isCollapsed ? "justify-center gap-0 px-0" : "gap-3 px-3"}`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />

                {/* Texto com fade */}
                <span
                  className={`whitespace-nowrap transition-all duration-200 ${
                    isCollapsed ? "w-0 overflow-hidden opacity-0" : "w-auto opacity-100"
                  }`}
                >
                  {item.label}
                </span>

                {/* Tooltip quando collapsed */}
                {isCollapsed && (
                  <span className="pointer-events-none absolute left-full z-50 ml-2 whitespace-nowrap rounded-md border border-white/[0.08] bg-[#151B26] px-2 py-1 text-xs text-[#E2E8F0] opacity-0 transition-opacity group-hover:opacity-100">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer do sidebar */}
      <div className="space-y-1 border-t border-white/[0.06] px-2 py-4">
        <p
          className={`mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-[#475569] transition-opacity duration-200 ${
            isCollapsed ? "mb-0 h-0 opacity-0" : "opacity-100"
          }`}
        >
          Sistema
        </p>

        {footerItems.map((item) => {
          const isActive = isActivePath(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`group relative flex items-center rounded-lg border py-2 text-sm transition-all ${
                isActive
                  ? "border-[#467782]/20 bg-[#467782]/10 text-[#6BB6C7]"
                  : "border-transparent text-[#64748B] hover:bg-white/[0.02] hover:text-[#94A3B8]"
              } ${isCollapsed ? "justify-center gap-0 px-0" : "gap-3 px-3"}`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />

              <span
                className={`whitespace-nowrap transition-all duration-200 ${
                  isCollapsed ? "w-0 overflow-hidden opacity-0" : "w-auto opacity-100"
                }`}
              >
                {item.label}
              </span>

              {isCollapsed && (
                <span className="pointer-events-none absolute left-full z-50 ml-2 whitespace-nowrap rounded-md border border-white/[0.08] bg-[#151B26] px-2 py-1 text-xs text-[#E2E8F0] opacity-0 transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}

        <p
          className={`pt-3 font-mono text-[10px] text-[#475569] ${isCollapsed ? "text-center" : "px-3"}`}
        >
          v{process.env.NEXT_PUBLIC_APP_VERSION}
        </p>
      </div>
    </aside>
  );
}
