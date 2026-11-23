"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";
import type { Theme } from "@/lib/theme";

const options: { value: Theme; label: string; icon: React.ElementType }[] = [
  { value: "dark", label: "Escuro", icon: Moon },
  { value: "light", label: "Claro", icon: Sun },
  { value: "system", label: "Sistema", icon: Monitor },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Tema da plataforma"
      className="flex items-center gap-1 rounded-lg border border-overlay/[0.08] bg-base/60 p-1"
    >
      {options.map(({ value, label, icon: Icon }) => {
        const selected = theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={label}
            onClick={() => setTheme(value)}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors ${
              selected
                ? "bg-accent/20 text-fg-strong"
                : "text-fg-faint hover:bg-overlay/[0.04] hover:text-fg-strong"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {/* Só o ícone em telas muito estreitas, para o seletor caber ao lado do título */}
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
