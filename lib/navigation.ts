// "/odsim" ativa em "/odsim" e "/odsim/simulator", mas não em "/odsimx"
export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
