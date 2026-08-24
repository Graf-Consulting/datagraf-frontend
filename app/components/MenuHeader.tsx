"use client";

import { LogIn } from "lucide-react";
import Link from "next/link";

export default function MenuHeader() {
  return (
    <header className="sticky top-0 z-50">
      {/* Camada glass com borda sutil */}
      <div className="absolute inset-0 bg-[#0E0E0E]/60 backdrop-blur-xl border-b border-white/[0.06]" 
           style={{ boxShadow: 'inset 0 -1px 0 0 rgba(255,255,255,0.03)' }} />
      
      <div className="relative max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-lg flex items-center justify-center shadow-lg shadow-[#467782]/20">
            <span className="text-white font-bold text-sm tracking-tight">OD</span>
          </div>
          <span className="font-semibold text-gray-100 group-hover:text-[#6BB6C7] transition-colors duration-300">
            Observatório de Dados
          </span>
        </Link>

        {/* Botão de Login */}
        <Link
          href="/login"
          className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-300 overflow-hidden group"
        >
          {/* Fundo do botão com gradiente sutil */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#467782] to-[#3D6A75] group-hover:from-[#4DA0B2] group-hover:to-[#467782] transition-all duration-300" />
          {/* Glow no hover */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#467782]/20 blur-xl" />
          <span className="relative flex items-center gap-2">
            <LogIn className="w-4 h-4" />
            Entrar
          </span>
        </Link>
      </div>
    </header>
  );
}