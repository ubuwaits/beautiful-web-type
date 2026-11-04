import { describe, expect, it } from "vitest";
import { buildAtomFeedXml } from "@/lib/feed";
import type { Typeface } from "@/lib/content/types";

const font: Typeface = {
  slug: "test-font",
  name: "Test Font",
  dateAdded: "2026-11-04T09:47:24+01:00",
  category: "Serif",
  categorySlug: "serif",
  styles: 1,
  glyphCount: 100,
  weights: [{ name: "Regular", weight: 400 }],
  latestRelease: { version: "1.0", date: "1 Nov 2026" },
  projectUrl: "https://example.com/font",
  creator: { name: "Test & Foundry", url: "https://example.com" },
  summary: "A test font.",
  description: 'First <em>paragraph</em>.\n\nSecond <a href="/serif/">paragraph</a>.',
  features: [],
  fontFile: "/assets/fonts/test-font.woff2"
};

describe("Atom feed serialization", () => {
  it("places the image before separately wrapped paragraphs and preserves HTML safely", () => {
    const xml = buildAtomFeedXml([font]);
    const content = xml.match(/<content type="html">([\s\S]*?)<\/content>/)![1];
    expect(content.indexOf("&lt;img ")).toBeLessThan(content.indexOf("First"));
    expect(content).toContain("&lt;p&gt;First &lt;em&gt;paragraph&lt;/em&gt;.&lt;/p&gt;\n&lt;p&gt;Second");
    expect(content).toContain('href=&quot;https://www.beautifulwebtype.com/serif/&quot;');
    expect(content).toContain("Test Font by Test &amp;amp; Foundry");
    expect(xml).toContain('<summary type="html">&lt;p&gt;First');
  });

  it("preserves publication times and uses the latest actual update across timezones", () => {
    const xml = buildAtomFeedXml([
      { ...font, updatedAt: "2026-11-04T12:00:00+02:00" },
      { ...font, slug: "other-font", dateAdded: "2026-11-04T10:30:15Z" }
    ]);
    expect(xml).toContain("<published>2026-11-04T08:47:24.000Z</published>");
    expect(xml.match(/<updated>(.*?)<\/updated>/)![1]).toBe("2026-11-04T10:30:15.000Z");
    expect(xml).toContain("<updated>2026-11-04T10:00:00.000Z</updated>");
  });
});
