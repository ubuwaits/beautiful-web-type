import { mkdir, rm, cp, writeFile } from "node:fs/promises";
import path from "node:path";

import { buildFeedXml, buildSitemapXml } from "../lib/content";

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

const DIRECTORIES_TO_COPY = ["assets", "css", "js", "v1", ".well-known"];
const FILES_TO_COPY = [
  "CHANGELOG.md",
  "CNAME",
  "LICENSE",
  "README.md",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-96x96.png",
  "google146824b99fdbed48.html"
];

async function clearGeneratedPublicFiles() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  for (const directory of DIRECTORIES_TO_COPY) {
    await rm(path.join(PUBLIC_DIR, directory), { force: true, recursive: true });
  }

  for (const fileName of [...FILES_TO_COPY, "feed.xml", "sitemap.xml"]) {
    await rm(path.join(PUBLIC_DIR, fileName), { force: true });
  }
}

async function copyStaticEntries() {
  for (const directory of DIRECTORIES_TO_COPY) {
    await cp(path.join(ROOT_DIR, directory), path.join(PUBLIC_DIR, directory), {
      recursive: true
    });
  }

  for (const fileName of FILES_TO_COPY) {
    await cp(path.join(ROOT_DIR, fileName), path.join(PUBLIC_DIR, fileName));
  }
}

async function writeGeneratedXmlFiles() {
  const buildDate = new Date().toISOString();

  await writeFile(path.join(PUBLIC_DIR, "feed.xml"), buildFeedXml(buildDate), "utf8");
  await writeFile(path.join(PUBLIC_DIR, "sitemap.xml"), buildSitemapXml(buildDate), "utf8");
}

async function main() {
  await clearGeneratedPublicFiles();
  await copyStaticEntries();
  await writeGeneratedXmlFiles();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
