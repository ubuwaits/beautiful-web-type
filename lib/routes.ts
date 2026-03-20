export const SITE_ORIGIN = "https://www.beautifulwebtype.com";

export const STATIC_SITEMAP_PATHS = [
  "/",
  "/display/",
  "/monospaced/",
  "/sans-serif/",
  "/serif/",
  "/pairings/"
] as const;

const NON_TYPEFACE_TOP_LEVEL_PATHS = [
  "assets",
  "css",
  "feed.xml",
  "google146824b99fdbed48.html",
  "js",
  "sitemap.xml",
  "v1"
] as const;

function routeToTopLevelSlug(routePath: string): string | undefined {
  return routePath.split("/").filter(Boolean)[0];
}

export function getReservedTopLevelSlugs(): Set<string> {
  return new Set([
    ...STATIC_SITEMAP_PATHS.map(routeToTopLevelSlug).filter(
      (routeSlug): routeSlug is string => routeSlug !== undefined
    ),
    ...NON_TYPEFACE_TOP_LEVEL_PATHS
  ]);
}

export function getTypefacePath(typefaceSlug: string): string {
  return `/${typefaceSlug}/`;
}

export function getGlyphPath(typefaceSlug: string): string {
  return `/${typefaceSlug}/glyphs/`;
}

export function toAbsoluteUrl(routePath: string): string {
  return new URL(routePath, SITE_ORIGIN).toString();
}
