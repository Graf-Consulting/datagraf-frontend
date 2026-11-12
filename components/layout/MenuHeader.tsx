"use client";

import { createClient } from "@/lib/supabase/clients";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogIn, LogOut, User } from "lucide-react";
import Link from "next/link";
import LoadingScreen from "../ui/LoadingScreen";
import { useAuth } from "./AuthProvider";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/analises/", label: "Análises" },
  { href: "/insights/", label: "Insights" },
];

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
        className="absolute inset-0 border-b border-white/[0.06] bg-[#0E0E0E]/60 backdrop-blur-xl"
        style={{ boxShadow: "inset 0 -1px 0 0 rgba(255,255,255,0.03)" }}
      />

      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#4DA0B2] to-[#467782] shadow-lg shadow-[#467782]/20">
            <span className="text-sm font-bold tracking-tight text-white">OD</span>
          </div>
          <span className="font-semibold text-gray-100 transition-colors duration-300 group-hover:text-[#6BB6C7]">
            Observatório de Dados
          </span>
        </Link>

        {!loading && !user && (
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#467782]/10 text-[#6BB6C7]"
                      : "text-[#94A3B8] hover:bg-white/[0.04] hover:text-white"
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
                <div className="hidden items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 sm:flex">
                  <User className="h-4 w-4 text-[#6BB6C7]" />
                  <span className="max-w-[140px] truncate text-sm text-[#E2E8F0]">
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
              <Link
                href="/login/"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#467782] to-[#3D6A75] transition-all duration-300 group-hover:from-[#4DA0B2] group-hover:to-[#467782]" />
                <span className="absolute inset-0 bg-[#467782]/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Entrar
                </span>
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
}
