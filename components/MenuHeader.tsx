"use client";

import { createClient } from "@/lib/supabase/clients";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogIn, LogOut, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import LoadingScreen from "./LoadingScreen";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/analises/", label: "Análises" },
  { href: "/insights/", label: "Insights" },
];


export default function MenuHeader() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await supabase.auth.signOut();
    window.location.href = "/";
  };
  if (isLoggingOut) {
    return <LoadingScreen message="Saindo..." />;
  }

  return (
    <header className="sticky top-0 z-50">
      <div 
        className="absolute inset-0 bg-[#0E0E0E]/60 backdrop-blur-xl border-b border-white/[0.06]" 
        style={{ boxShadow: 'inset 0 -1px 0 0 rgba(255,255,255,0.03)' }} 
      />
      
      <div className="relative max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-lg flex items-center justify-center shadow-lg shadow-[#467782]/20">
            <span className="text-white font-bold text-sm tracking-tight">OD</span>
          </div>
          <span className="font-semibold text-gray-100 group-hover:text-[#6BB6C7] transition-colors duration-300">
            Observatório de Dados
          </span>
        </Link>

        {!loading && !user && (
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#6BB6C7] bg-[#467782]/10"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
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
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  <User className="w-4 h-4 text-[#6BB6C7]" />
                  <span className="text-sm text-[#E2E8F0] truncate max-w-[140px]">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-300 overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/80 group-hover:from-red-800 group-hover:to-red-700 transition-all duration-300" />
                  <span className="relative flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Sair
                  </span>
                </button>
              </div>
            ) : (
              <Link
                href="/login/"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-300 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#467782] to-[#3D6A75] group-hover:from-[#4DA0B2] group-hover:to-[#467782] transition-all duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#467782]/20 blur-xl" />
                <span className="relative flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
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