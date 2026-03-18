import { access } from "node:fs/promises";
import path from "node:path";

import { getSiteData } from "../lib/content";

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
  const site = getSiteData();
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
    ".well-known/brave-payments-verification.txt",
    "google146824b99fdbed48.html",
    "css/application.css",
    "js/opentype.min.js",
    "assets/images/card.png",
    "assets/fonts/inter/Inter-Regular.woff"
  ];

  for (const typeface of site.typefaces) {
    expectedFiles.push(`${typeface.slug}/index.html`);
    expectedFiles.push(`${typeface.slug}/glyphs/index.html`);
  }

  await Promise.all(expectedFiles.map(assertExists));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
