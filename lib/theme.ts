export type Theme = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "nativ-theme";
export const DEFAULT_THEME: Theme = "dark";
export const SYSTEM_DARK_QUERY = "(prefers-color-scheme: dark)";

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

// Preferência salva do usuário. Fora do navegador (ou sem acesso ao localStorage) usa o padrão.
export function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // localStorage indisponível (modo privado, por exemplo): o tema vale só até recarregar
  }
}

// Aplica a classe `light` ou `dark` no <html>. As cores vêm das variáveis de app/globals.css.
export function applyTheme(theme: Theme) {
  const isDark = theme === "dark" || (theme === "system" && matchMedia(SYSTEM_DARK_QUERY).matches);
  const next = isDark ? "dark" : "light";
  const classes = document.documentElement.classList;
  if (classes.contains(next)) return;

  // Sem isso, quem tem `transition-*` (sidebar, header, cards) anima a cor por 300 ms e o resto
  // da página troca na hora: o tema muda "em partes". Desliga as transições só durante a troca.
  const style = document.createElement("style");
  style.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(style);

  classes.remove("light", "dark");
  classes.add(next);

  // Força o navegador a calcular os estilos novos com as transições desligadas antes de religá-las
  void getComputedStyle(document.body).opacity;
  setTimeout(() => style.remove(), 1);
}

// Roda no <head> antes da primeira pintura, para a página não piscar no tema errado.
// Precisa repetir a lógica de readTheme/applyTheme porque executa fora do bundle.
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t!=="light"&&t!=="dark"&&t!=="system")t=${JSON.stringify(DEFAULT_THEME)};var d=t==="dark"||(t==="system"&&matchMedia(${JSON.stringify(SYSTEM_DARK_QUERY)}).matches);var c=document.documentElement.classList;c.remove("light","dark");c.add(d?"dark":"light")}catch(e){}})()`;
