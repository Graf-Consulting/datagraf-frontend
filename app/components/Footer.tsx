// app/components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Esquerda: Logo + descrição */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#4DA0B2] to-[#467782] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">OD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#E2E8F0]">Observatório de Dados</p>
              <p className="text-xs text-[#64748B]">Powered by GRAF Infra Consulting</p>
            </div>
          </div>

          {/* Centro: Links rápidos */}
          <nav className="flex items-center gap-6">
            <Link href="#" className="text-xs text-[#64748B] hover:text-[#6BB6C7] transition-colors">
              Documentação
            </Link>
            <Link href="#" className="text-xs text-[#64748B] hover:text-[#6BB6C7] transition-colors">
              Suporte
            </Link>
            <Link href="#" className="text-xs text-[#64748B] hover:text-[#6BB6C7] transition-colors">
              Changelog
            </Link>
          </nav>

          {/* Direita: Copyright + versão */}
          <div className="text-right">
            <p className="text-xs text-[#475569]">
              © {new Date().getFullYear()} GRAF Infra Consulting
            </p>
            <p className="text-[10px] text-[#475569]/70 mt-0.5 font-mono">
              v1.0.0 · build 20260820
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}