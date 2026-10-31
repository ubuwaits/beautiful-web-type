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
  features: [{ type: "comparison", title: "Ligatures", examples: ["fi"] }],
  fontFile: "/assets/fonts/test.woff"
};

function createContentRoot(): string {
  const root = mkdtempSync(path.join(tmpdir(), "beautiful-web-type-content-"));
  const fontsDir = path.join(root, "public", "assets", "fonts");
  mkdirSync(fontsDir, { recursive: true });
  writeFileSync(path.join(fontsDir, "test.woff"), "font-data\n");
  return root;
}

describe("content validation", () => {
  it("loads font metadata and feature examples from typed modules", () => {
    const root = createContentRoot();
    try {
      const [typeface] = loadTypefaces([font], path.join(root, "public"));
      expect(typeface?.glyphCount).toBe(123);
      expect(typeface?.features).toBe(font.features);
      expect(typeface.fontFile).toBe(font.fontFile);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("requires glyph font assets referenced by content", () => {
    const root = createContentRoot();
    try {
      expect(() => loadTypefaces([{ ...font, fontFile: "/assets/fonts/missing.woff" }], path.join(root, "public"))).toThrow(
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
      expect(() => loadTypefaces([data], path.join(root, "public"))).toThrow(error);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
