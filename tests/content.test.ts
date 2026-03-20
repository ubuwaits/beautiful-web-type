import { describe, expect, it } from "vitest";

import {
  buildFeedXml,
  buildSitemapXml,
  getPublicRoutes,
  getSiteData
} from "@/lib/content";

describe("content graph", () => {
  it("loads all collections and validates cross-links", () => {
    const site = getSiteData();

    expect(site.typefaces).toHaveLength(42);
    expect(site.glyphPages).toHaveLength(42);
    expect(site.samples).toHaveLength(42);
    expect(site.pairings).toHaveLength(6);
    expect(site.typefaceBySlug.get("inter")?.name).toBe("Inter");
    expect(site.sampleByTypefaceName.get("Inter")?.slug).toBe("inter");
    expect(site.glyphPageBySlug.get("inter")?.typefaceName).toBe("Inter");
  });

  it("includes key static routes in the generated sitemap route list", () => {
    const site = getSiteData();
    const routes = getPublicRoutes();

    expect(routes).toEqual(
      expect.arrayContaining([
        "/",
        "/display/",
        "/monospaced/",
        "/sans-serif/",
        "/serif/",
        "/pairings/",
        "/inter/",
        "/inter/glyphs/"
      ])
    );
    expect(routes).toHaveLength(6 + site.typefaces.length * 2);
  });

  it("builds feed and sitemap XML from the typed content graph", () => {
    const sitemapXml = buildSitemapXml("2026-03-18T10:00:00.000Z");
    const feedXml = buildFeedXml("2026-03-18T10:00:00.000Z");

    expect(sitemapXml).toContain("https://www.beautifulwebtype.com/inter/");
    expect(sitemapXml).toContain("https://www.beautifulwebtype.com/inter/glyphs/");
    expect(feedXml).toContain("<feed");
    expect(feedXml).toContain("Inter by Rasmus Andersson");
    expect(feedXml).toContain("https://www.beautifulwebtype.com/assets/images/inter.png");
  });
});
