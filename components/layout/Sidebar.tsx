"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart3, Lightbulb, Settings, HelpCircle,
    Map, FilePlus, Newspaper,
    ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "./AuthProvider";

const navItems = [
  { href: "/hub/", label: "Início", icon: Home },
  { href: "/analises/", label: "Análises", icon: BarChart3 },
  { href: "/insights/", label: "Insights", icon: Lightbulb },
  { href: "/clipping/", label: "Clipping", icon: Newspaper },
  { href: "/odsim/", label: "ODSim", icon: Map },
  { href: "/matmaker/", label: "MatMaker", icon: FilePlus }
];

const footerItems = [
  { href: "/configuration/", label: "Configurações", icon: Settings },
  { href: "/help/", label: "Ajuda", icon: HelpCircle },
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
          className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-[#0E0E0E] border-r border-white/[0.06] z-40 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isCollapsed ? "w-16" : "w-64"
          }`}
        >
            {/* Botão de toggle */}
            <button
              onClick={onToggle}
              className="absolute -right-3 top-6 w-6 h-6 bg-[#151B26] border border-white/[0.08] rounded-full flex items-center justify-center text-[#64748B] hover:text-[#94A3B8] hover:border-[#467782]/30 transition-all z-50"
              title={isCollapsed ? "Expandir" : "Retrair"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-3 h-3" />
              ) : (
                <ChevronLeft className="w-3 h-3" />
              )}
            </button>

            {/* Navegação principal */}
            <div className="flex-1 py-6 px-2 space-y-1">
                <p className={`px-3 text-[10px] font-semibold text-[#475569] uppercase tracking-wider mb-3 transition-opacity duration-200 ${
                  isCollapsed ? "opacity-0 h-0 mb-0" : "opacity-100"
                }`}>
                  Principal
                </p>
              
                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/hub/");
                    const Icon = item.icon;
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group relative flex items-center py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "text-[#6BB6C7] bg-[#467782]/10 border-[#467782]/20"
                            : "text-[#94A3B8] border-transparent hover:text-white hover:bg-white/[0.04]"
                        } ${isCollapsed ? "justify-center px-0 gap-0" : "px-3 gap-3"}`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                      
                        {/* Texto com fade */}
                        <span className={`whitespace-nowrap transition-all duration-200 ${
                          isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
                        }`}>
                          {item.label}
                        </span>
                      
                        {/* Tooltip quando collapsed */}
                        {isCollapsed && (
                          <span className="absolute left-full ml-2 px-2 py-1 bg-[#151B26] border border-white/[0.08] rounded-md text-xs text-[#E2E8F0] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                            {item.label}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>
            </div>

            {/* Footer do sidebar */}
            <div className="px-2 py-4 border-t border-white/[0.06] space-y-1">
                <p className={`px-3 text-[10px] font-semibold text-[#475569] uppercase tracking-wider mb-2 transition-opacity duration-200 ${
                  isCollapsed ? "opacity-0 h-0 mb-0" : "opacity-100"
                }`}>
                  Sistema
                </p>
              
                {footerItems.map((item) => {
                  const isActive = pathname.startsWith(item.href);
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`group relative flex items-center py-2 rounded-lg border text-sm transition-all ${
                        isActive
                          ? "text-[#6BB6C7] bg-[#467782]/10 border-[#467782]/20"
                          : "text-[#64748B] border-transparent hover:text-[#94A3B8] hover:bg-white/[0.02]"
                      } ${isCollapsed ? "justify-center px-0 gap-0" : "px-3 gap-3"}`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                    
                      <span className={`whitespace-nowrap transition-all duration-200 ${
                        isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
                      }`}>
                        {item.label}
                      </span>
                    
                      {isCollapsed && (
                        <span className="absolute left-full ml-2 px-2 py-1 bg-[#151B26] border border-white/[0.08] rounded-md text-xs text-[#E2E8F0] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                          {item.label}
                        </span>
                      )}
                    </Link>
                  );
                })}

                <p className={`pt-3 text-[10px] font-mono text-[#475569] ${isCollapsed ? "text-center" : "px-3"}`}>
                  v{process.env.NEXT_PUBLIC_APP_VERSION}
                </p>
            </div>
        </aside>
    );
}