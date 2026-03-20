import { access } from "node:fs/promises";
import path from "node:path";

import { getAllTypefaceSlugs } from "../lib/content";

const ROOT_DIR = process.cwd();
const OUT_DIR = path.join(ROOT_DIR, "out");

async function assertExists(relativePath: string) {
  const filePath = path.join(OUT_DIR, relativePath);

  try {
    await access(filePath);
  } catch {
    throw new Error(`Missing export artifact: ${relativePath}`);
  }
}

async function main() {
  const typefaceSlugs = getAllTypefaceSlugs();
  const expectedFiles = [
    "404.html",
    "feed.xml",
    "sitemap.xml",
    "index.html",
    "pairings/index.html",
    "display/index.html",
    "monospaced/index.html",
    "sans-serif/index.html",
    "serif/index.html",
    "v1/index.html",
    "google146824b99fdbed48.html",
    "css/application.css",
    "js/opentype.min.js",
    "js/wawoff2-decompress.js",
    "assets/images/card.png",
    "assets/fonts/cooper-hewitt/CooperHewitt-Book.woff2",
    "assets/fonts/inter/Inter-roman.var.woff2",
    "assets/fonts/jost/Jost-400-Book.woff2"
  ];

  for (const typefaceSlug of typefaceSlugs) {
    expectedFiles.push(`${typefaceSlug}/index.html`);
    expectedFiles.push(`${typefaceSlug}/glyphs/index.html`);
  }

  await Promise.all(expectedFiles.map(assertExists));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
