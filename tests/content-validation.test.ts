import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";

import { describe, expect, it } from "vitest";

import { loadTypefaces } from "@/lib/content";
import type { TypefaceData } from "@/lib/content/types";

const font: TypefaceData = {
  slug: "test-sans",
  name: "Test Sans",
  dateAdded: "2024-01-01",
  category: "Sans-Serif",
  styles: 2,
  glyphCount: 123,
  weights: [{ weight: 400, name: "Regular" }],
  latestRelease: { version: "v1.0", date: "1 Jan 2024" },
  projectUrl: "https://example.com/test-sans",
  creator: { name: "Example Foundry", url: "https://example.com" },
  description: "Example typeface",
  fontFile: "/assets/fonts/test.woff"
};

function createContentRoot(): string {
  const root = mkdtempSync(path.join(tmpdir(), "beautiful-web-type-content-"));
  const typefaceDir = path.join(root, "typefaces", font.slug);
  const fontsDir = path.join(root, "public", "assets", "fonts");
  mkdirSync(typefaceDir, { recursive: true });
  mkdirSync(fontsDir, { recursive: true });
  writeFileSync(path.join(typefaceDir, "detail.html"), "<p>Detail body</p>\n");
  writeFileSync(path.join(fontsDir, "test.woff"), "font-data\n");
  return root;
}

describe("content validation", () => {
  it("loads font metadata and feature markup from typed content", () => {
    const root = createContentRoot();
    try {
      const [typeface] = loadTypefaces(root, [font]);
      expect(typeface?.glyphCount).toBe(123);
      expect(typeface?.bodyHtml).toBe("<p>Detail body</p>");
      expect(typeface.fontFile).toBe(font.fontFile);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("requires the feature HTML file", () => {
    const root = createContentRoot();
    try {
      rmSync(path.join(root, "typefaces", font.slug, "detail.html"));
      expect(() => loadTypefaces(root, [font])).toThrow("Expected file to exist");
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("requires glyph font assets referenced by content", () => {
    const root = createContentRoot();
    try {
      expect(() => loadTypefaces(root, [{ ...font, fontFile: "/assets/fonts/missing.woff" }])).toThrow(
        'Expected "fontFile" asset to exist'
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it.each([
    { data: { ...font, slug: "serif" }, error: "collides with a reserved route" },
    { data: { ...font, familyFaces: ["Missing Font"] }, error: 'Missing family face "Missing Font"' }
  ])("rejects invalid route or family references: $error", ({ data, error }) => {
    const root = createContentRoot();
    try {
      expect(() => loadTypefaces(root, [data])).toThrow(error);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
