import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const ROOT_DIR = process.cwd();
const FONT_REFERENCE_ROOTS = [
  "app",
  "components",
  "content",
  "css/application.css",
  "css/src",
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
  ".yaml",
  ".yml"
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

    return entry.isDirectory() ? listTextFiles(childPath) : listTextFiles(childPath);
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
  it("points source font references at checked-in assets", () => {
    const missingReferences = collectFontReferences()
      .filter((reference) => !existsSync(path.join(ROOT_DIR, reference.url.slice(1))))
      .map((reference) => `${reference.filePath}: ${reference.rawUrl}`);

    expect(missingReferences).toEqual([]);
  });

  it("uses matching CSS format hints for font-face URLs", () => {
    const cssFiles = ["css/application.css", "css/src"].flatMap(listTextFiles);
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
