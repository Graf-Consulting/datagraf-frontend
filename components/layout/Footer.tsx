// app/components/Footer.tsx
"use client";

import Link from "next/link";
import { NativMark } from "@/components/ui/NativMark";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-overlay/[0.06]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Esquerda: Logo + descrição */}
          <div className="flex items-center gap-3">
            <NativMark className="h-8 w-8" />
            <div>
              <p className="text-sm font-medium text-fg">Nativ</p>
              <p className="text-xs text-fg-subtle">Powered by GRAF Infra Consulting</p>
            </div>
          </div>

          {/* Centro: Links rápidos */}
          <nav className="-my-3.5 flex items-center gap-2">
            <Link
              href="#"
              className="inline-block px-2 py-3.5 text-xs text-fg-subtle transition-colors hover:text-accent-fg"
            >
              Documentação
            </Link>
            <Link
              href="#"
              className="inline-block px-2 py-3.5 text-xs text-fg-subtle transition-colors hover:text-accent-fg"
            >
              Suporte
            </Link>
            <Link
              href="#"
              className="inline-block px-2 py-3.5 text-xs text-fg-subtle transition-colors hover:text-accent-fg"
            >
              Changelog
            </Link>
          </nav>

          {/* Direita: Copyright + versão */}
          <div className="text-right">
            <p className="text-xs text-fg-faint">
              © {new Date().getFullYear()} GRAF Infra Consulting
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-fg-faint/70">v1.0.0 · build 20260820</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
