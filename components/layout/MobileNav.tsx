"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { isActivePath, publicNavLinks } from "@/lib/navigation";

// Menu do visitante em telas estreitas, onde os links do header não cabem na linha.
// Abre um painel logo abaixo do header; fecha ao escolher um link, com Esc ou tocando fora.
// Aparece abaixo do breakpoint `nav` (tailwind.config.ts), o mesmo que esconde os links do MenuHeader.
// O visual do botão segue o do nome do usuário logado (borda e fundo sutis, ícone em acento).
export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="nav:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-overlay/[0.06] bg-overlay/[0.04] text-accent-fg transition-colors hover:bg-overlay/[0.08]"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <>
          {/* Toque fora do painel fecha o menu */}
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-16 bg-base/40"
          />
          <nav
            id="mobile-nav"
            className="absolute inset-x-0 top-full border-b border-overlay/[0.06] bg-base/95 px-4 py-3 shadow-lg backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-1">
              {publicNavLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent-fg"
                          : "text-fg-muted hover:bg-overlay/[0.04] hover:text-fg-strong"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
