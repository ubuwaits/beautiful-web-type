import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";

import { describe, expect, it } from "vitest";

import { buildContentGraphFromContentDir } from "@/lib/content/graph";

function createContentRoot(): string {
  const root = mkdtempSync(path.join(tmpdir(), "beautiful-web-type-content-"));
  const typefaceDir = path.join(root, "typefaces", "test-sans");
  const pairingsDir = path.join(root, "pairings");
  const siteDir = path.join(root, "site");

  mkdirSync(typefaceDir, { recursive: true });
  mkdirSync(pairingsDir, { recursive: true });
  mkdirSync(siteDir, { recursive: true });

  writeFileSync(
    path.join(siteDir, "text.yml"),
    [
      "specimen:",
      "  primary: Signal & Shape",
      "words:",
      "  - Questography",
      "headlines:",
      "  - Example headline",
      "paragraphs:",
      "  - Example paragraph"
    ].join("\n"),
    "utf8"
  );

  writeFileSync(
    path.join(typefaceDir, "meta.yml"),
    [
      "name: Test Sans",
      "dateAdded: '2024-01-01'",
      "category: Sans-Serif",
      "styles: 2",
      "sampleShade: light",
      "sampleText: Bespoke Sample",
      'sampleClasses: "[--sample-fit-width:0.78] tracking-tight"',
      "weights:",
      "  - weight: 400",
      "    name: Regular",
      "latestRelease:",
      "  version: v1.0",
      "  date: 1 Jan 2024",
      "projectUrl: https://example.com/test-sans",
      "creator:",
      "  name: Example Foundry",
      "  url: https://example.com",
      "description: Example typeface"
    ].join("\n"),
    "utf8"
  );
  writeFileSync(path.join(typefaceDir, "detail.html"), "<p>Detail body</p>\n", "utf8");
  writeFileSync(path.join(typefaceDir, "sample.html"), "<p>Sample body</p>\n", "utf8");
  writeFileSync(path.join(typefaceDir, "glyphs.yml"), "fontFile: /assets/fonts/test.woff\n", "utf8");

  return root;
}

describe("content validation", () => {
  it("loads per-typeface sample overrides from metadata", () => {
    const root = createContentRoot();

    try {
      const graph = buildContentGraphFromContentDir(root);
      const typeface = graph.typefaceBySlug.get("test-sans");

      expect(typeface?.sampleText).toBe("Bespoke Sample");
      expect(typeface?.sampleClasses).toBe("[--sample-fit-width:0.78] tracking-tight");
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("rejects invalid sampleShade values", () => {
    const root = createContentRoot();

    try {
      writeFileSync(
        path.join(root, "typefaces", "test-sans", "meta.yml"),
        [
          "name: Test Sans",
          "dateAdded: '2024-01-01'",
          "category: Sans-Serif",
          "styles: 2",
          "sampleShade: neon",
          "weights:",
          "  - weight: 400",
          "    name: Regular",
          "latestRelease:",
          "  version: v1.0",
          "  date: 1 Jan 2024",
          "projectUrl: https://example.com/test-sans",
          "creator:",
          "  name: Example Foundry",
          "  url: https://example.com",
          "description: Example typeface"
        ].join("\n"),
        "utf8"
      );

      expect(() => buildContentGraphFromContentDir(root)).toThrow(
        'Expected "sampleShade" to be "light" or "dark"'
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("requires all files in a typeface bundle", () => {
    const root = createContentRoot();

    try {
      rmSync(path.join(root, "typefaces", "test-sans", "glyphs.yml"));

      expect(() => buildContentGraphFromContentDir(root)).toThrow("Expected file to exist");
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
