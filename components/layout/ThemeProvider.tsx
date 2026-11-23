"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import {
  DEFAULT_THEME,
  SYSTEM_DARK_QUERY,
  applyTheme,
  readTheme,
  saveTheme,
  type Theme,
} from "@/lib/theme";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeState>({ theme: DEFAULT_THEME, setTheme: () => {} });

// Avisa os assinantes quando o tema muda nesta aba. Outras abas avisam pelo evento "storage".
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function setTheme(theme: Theme) {
  saveTheme(theme);
  listeners.forEach((notify) => notify());
}

// Guarda a preferência de tema (claro, escuro ou sistema). Quem pinta é o CSS: o tema vira uma
// classe no <html> e as cores semânticas (bg-surface, text-fg...) trocam de valor.
// A primeira pintura é resolvida por themeInitScript, no layout raiz.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => DEFAULT_THEME);

  useEffect(() => {
    // Lê do storage (e não de `theme`) porque no primeiro render da hidratação `theme` ainda é o padrão
    applyTheme(readTheme());
    if (theme !== "system") return;

    const mql = matchMedia(SYSTEM_DARK_QUERY);
    const onChange = () => applyTheme("system");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
