export function isCurrentRouteActive(href: string, pathName: string) {
  return pathName === href;
}