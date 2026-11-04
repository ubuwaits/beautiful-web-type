import type { MetadataRoute } from "next";

import { toAbsoluteUrl } from "@/lib/routes";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: toAbsoluteUrl("/sitemap.xml")
  };
}
