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
  canToggle: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, canToggle, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const { user, loading } = useAuth();

  if (loading || !user) return null;

  return (
    <aside
      className={`fixed left-0 top-16 z-40 flex h-[calc(100vh-64px)] flex-col border-r border-overlay/[0.06] bg-base transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Botão de toggle (escondido no mobile, onde a sidebar fica sempre recolhida) */}
      {canToggle && (
        <button
          onClick={onToggle}
          className="absolute -right-3 top-6 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-overlay/[0.08] bg-surface-raised text-fg-subtle transition-all hover:border-accent/30 hover:text-fg-muted"
          title={isCollapsed ? "Expandir" : "Retrair"}
        >
          {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
        </button>
      )}

      {/* Navegação principal */}
      <div className="flex-1 space-y-1 px-2 py-6">
        <p
          className={`mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-fg-faint transition-opacity duration-200 ${
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
                    ? "border-accent/20 bg-accent/10 text-accent-fg"
                    : "border-transparent text-fg-muted hover:bg-overlay/[0.04] hover:text-fg-strong"
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
                  <span className="pointer-events-none absolute left-full z-50 ml-2 whitespace-nowrap rounded-md border border-overlay/[0.08] bg-surface-raised px-2 py-1 text-xs text-fg opacity-0 transition-opacity group-hover:opacity-100">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer do sidebar */}
      <div className="space-y-1 border-t border-overlay/[0.06] px-2 py-4">
        <p
          className={`mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-fg-faint transition-opacity duration-200 ${
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
                  ? "border-accent/20 bg-accent/10 text-accent-fg"
                  : "border-transparent text-fg-subtle hover:bg-overlay/[0.02] hover:text-fg-muted"
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
                <span className="pointer-events-none absolute left-full z-50 ml-2 whitespace-nowrap rounded-md border border-overlay/[0.08] bg-surface-raised px-2 py-1 text-xs text-fg opacity-0 transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}

        <p
          className={`pt-3 font-mono text-[10px] text-fg-faint ${isCollapsed ? "text-center" : "px-3"}`}
        >
          v{process.env.NEXT_PUBLIC_APP_VERSION}
        </p>
      </div>
    </aside>
  );
}
