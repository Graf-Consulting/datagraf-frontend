"use client";

import { createClient } from "@/lib/supabase/clients";
import { usePathname } from "next/navigation";
import { isActivePath, publicNavLinks } from "@/lib/navigation";
import { useState } from "react";
import { LogIn, LogOut, User } from "lucide-react";
import Link from "next/link";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { useAuth } from "./AuthProvider";
import MobileNav from "./MobileNav";
import { NativMark } from "@/components/ui/NativMark";

export default function MenuHeader() {
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await createClient().auth.signOut();
    // Reload completo de propósito: limpa o router cache (staleTimes) com páginas da sessão anterior
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/";
  };
  if (isLoggingOut) {
    return <LoadingScreen message="Saindo..." />;
  }

  return (
    <header className="sticky top-0 z-50">
      <div
        className="absolute inset-0 border-b border-overlay/[0.06] bg-base/60 backdrop-blur-xl"
        style={{ boxShadow: "inset 0 -1px 0 0 rgb(var(--color-overlay) / 0.03)" }}
      />

      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <NativMark className="h-9 w-9 shadow-lg shadow-accent/20" />
          <span className="font-semibold text-fg-strong transition-colors duration-300 group-hover:text-accent-fg">
            Nativ
          </span>
        </Link>

        {!loading && !user && (
          // Abaixo do breakpoint `nav` (tailwind.config.ts) os links vão para o MobileNav
          <nav className="hidden items-center gap-1 nav:flex">
            {publicNavLinks.map((link) => {
              const isActive = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent/10 text-accent-fg"
                      : "text-fg-muted hover:bg-overlay/[0.04] hover:text-fg-strong"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}

        {!loading && (
          <>
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-lg border border-overlay/[0.06] bg-overlay/[0.04] px-3 py-1.5 sm:flex">
                  <User className="h-4 w-4 text-accent-fg" />
                  <span className="max-w-[140px] truncate text-sm text-fg">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/80 transition-all duration-300 group-hover:from-red-800 group-hover:to-red-700" />
                  <span className="relative flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Sair
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <MobileNav />
                <Link
                  href="/login"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark transition-all duration-300 group-hover:from-accent-light group-hover:to-accent" />
                  <span className="absolute inset-0 bg-accent/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Entrar
                  </span>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}
