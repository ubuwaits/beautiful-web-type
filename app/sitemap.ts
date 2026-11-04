import type { MetadataRoute } from "next";

import { getAllTypefaces } from "@/lib/content";
import {
  STATIC_SITEMAP_PATHS,
  getTypefacePath,
  toAbsoluteUrl
} from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const typefaces = getAllTypefaces();

  return [
    ...STATIC_SITEMAP_PATHS.map((path) => ({
      url: toAbsoluteUrl(path)
    })),
    ...typefaces.map((typeface) => ({
      url: toAbsoluteUrl(getTypefacePath(typeface.slug))
    }))
  ];
}
