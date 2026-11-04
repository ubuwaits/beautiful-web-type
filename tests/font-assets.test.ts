import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { typefaceData } from "@/content/typefaces";
import previews from "@/public/assets/font-previews/manifest.json";

const ROOT_DIR = process.cwd();
const FONT_REFERENCE_ROOTS = [
  "app",
  "components",
  "content",
  "lib",
  "scripts",
  "v1"
];
const TEXT_EXTENSIONS = new Set([
  ".css",
  ".html",
  ".js",
  ".jsx",
  ".json",
  ".md",
  ".ts",
  ".tsx",
  ".py"
]);

type FontReference = {
  filePath: string;
  rawUrl: string;
  url: string;
};

function stripUrlSuffix(url: string) {
  return url.replace(/[?#].*$/, "");
}

function listTextFiles(entryPath: string): string[] {
  const absolutePath = path.join(ROOT_DIR, entryPath);

  if (!existsSync(absolutePath)) {
    return [];
  }

  const stats = statSync(absolutePath);

  if (stats.isFile()) {
    return TEXT_EXTENSIONS.has(path.extname(absolutePath)) ? [absolutePath] : [];
  }

  return readdirSync(absolutePath, { withFileTypes: true }).flatMap((entry) => {
    const childPath = path.join(entryPath, entry.name);

    return listTextFiles(childPath);
  });
}

function collectFontReferences() {
  const references: FontReference[] = [];

  for (const filePath of FONT_REFERENCE_ROOTS.flatMap(listTextFiles)) {
    const source = readFileSync(filePath, "utf8");

    for (const match of source.matchAll(/\/assets\/fonts\/[^\s"')<>\\]+/g)) {
      references.push({
        filePath: path.relative(ROOT_DIR, filePath),
        rawUrl: match[0],
        url: stripUrlSuffix(match[0])
      });
    }
  }

  return references;
}

describe("font asset references", () => {
  it("keeps index subsets in sync with their source fonts and displayed text", () => {
    const manifest = previews as Record<string, {
      source: string; sourceHash: string; text: string; cssHash: string;
      generatorHash: string; previewHash: string;
    }>;
    const hashFile = (file: string) => createHash("sha256").update(readFileSync(file)).digest("hex");
    const generatorHash = hashFile("scripts/prepare-font-previews.py");
    expect(Object.keys(manifest).sort()).toEqual(typefaceData.map((font) => font.slug).sort());
    for (const { slug, name, creator } of typefaceData) {
      const preview = manifest[slug];
      expect(preview.text, slug).toBe(`${name}\n${creator.name}`);
      expect(preview.generatorHash, slug).toBe(generatorHash);
      expect(preview.source, slug).toMatch(/^\/assets\/fonts\//);
      expect(preview.sourceHash, slug).toBe(hashFile(path.join("public", preview.source)));
      expect(preview.cssHash, slug).toBe(hashFile(`app/fonts/${slug}.css`));
      expect(preview.previewHash, slug).toBe(hashFile(`public/assets/font-previews/${slug}.woff2`));
    }
  });

  it("points source font references at checked-in assets", () => {
    const missingReferences = collectFontReferences()
      .filter((reference) => !existsSync(path.join(ROOT_DIR, "public", reference.url.slice(1))))
      .map((reference) => `${reference.filePath}: ${reference.rawUrl}`);

    expect(missingReferences).toEqual([]);
  });

  it("uses matching CSS format hints for font-face URLs", () => {
    const cssFiles = listTextFiles("app/fonts");
    const invalidFormatHints: string[] = [];

    for (const filePath of cssFiles) {
      const source = readFileSync(filePath, "utf8");

      for (const match of source.matchAll(
        /url\("([^"]*\/assets\/fonts\/[^"]+)"\)\s*format\("([^"]+)"\)/g
      )) {
        const url = stripUrlSuffix(match[1]);
        const format = match[2];

        if (url.endsWith(".woff2") && !format.startsWith("woff2")) {
          invalidFormatHints.push(`${path.relative(ROOT_DIR, filePath)}: ${match[0]}`);
        }

        if (url.endsWith(".woff") && format !== "woff") {
          invalidFormatHints.push(`${path.relative(ROOT_DIR, filePath)}: ${match[0]}`);
        }

        if (url.endsWith(".ttf") && !format.startsWith("truetype")) {
          invalidFormatHints.push(`${path.relative(ROOT_DIR, filePath)}: ${match[0]}`);
        }
      }
    }

    expect(invalidFormatHints).toEqual([]);
  });
});
