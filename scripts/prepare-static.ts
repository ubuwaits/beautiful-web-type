import { mkdir, rm, cp, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const GOOGLE_VERIFICATION_FILE = "google146824b99fdbed48.html";
const GOOGLE_VERIFICATION_CONTENT =
  "google-site-verification: google146824b99fdbed48.html\n";
const REPO_ROOT_DOCUMENTATION_FILES = ["CHANGELOG.md", "LICENSE", "README.md"];

const DIRECTORIES_TO_CLEAR = ["assets", "css", "js", "v1"];
const DIRECTORIES_TO_COPY = [
  { source: "assets", target: "assets" },
  { source: "css", target: "css" },
  { source: "js", target: "js" },
  { source: "v1/stylesheets", target: "v1/stylesheets" }
];
const FILES_TO_COPY = ["favicon-16x16.png", "favicon-32x32.png", "favicon-96x96.png"];

async function clearGeneratedPublicFiles() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  for (const directory of DIRECTORIES_TO_CLEAR) {
    await rm(path.join(PUBLIC_DIR, directory), { force: true, recursive: true });
  }

  for (const fileName of [
    ...FILES_TO_COPY,
    ...REPO_ROOT_DOCUMENTATION_FILES,
    GOOGLE_VERIFICATION_FILE,
    "feed.xml",
    "sitemap.xml"
  ]) {
    await rm(path.join(PUBLIC_DIR, fileName), { force: true });
  }
}

async function copyStaticEntries() {
  for (const directory of DIRECTORIES_TO_COPY) {
    await cp(path.join(ROOT_DIR, directory.source), path.join(PUBLIC_DIR, directory.target), {
      recursive: true
    });
  }

  for (const fileName of FILES_TO_COPY) {
    await cp(path.join(ROOT_DIR, fileName), path.join(PUBLIC_DIR, fileName));
  }
}

async function writeGeneratedStaticFiles() {
  await writeFile(
    path.join(PUBLIC_DIR, GOOGLE_VERIFICATION_FILE),
    GOOGLE_VERIFICATION_CONTENT,
    "utf8"
  );
}

async function main() {
  await clearGeneratedPublicFiles();
  await copyStaticEntries();
  await writeGeneratedStaticFiles();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
