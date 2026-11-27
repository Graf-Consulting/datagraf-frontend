// Links públicos do header (visitante deslogado). Usados no menu de desktop e no menu do celular.
export const publicNavLinks = [
  { href: "/", label: "Início" },
  { href: "/analises", label: "Análises" },
  { href: "/insights", label: "Insights" },
];

// "/odsim" ativa em "/odsim" e "/odsim/simulator", mas não em "/odsimx"
export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
