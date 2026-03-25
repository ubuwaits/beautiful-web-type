import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import autoprefixer from "autoprefixer";
import postcss from "postcss";
import postcssImport from "postcss-import";

const ROOT_DIR = process.cwd();
const SOURCE_FILE = path.join(ROOT_DIR, "css", "src", "application.css");
const OUTPUT_FILE = path.join(ROOT_DIR, "css", "application.css");
const GENERATED_HEADER = [
  "/*",
  " * Generated file. Do not edit directly.",
  " * Edit css/src/application.css and its imported partials, then run `pnpm build:legacy-css`.",
  " */",
  ""
].join("\n");

async function main() {
  const source = await readFile(SOURCE_FILE, "utf8");
  const result = await postcss([postcssImport(), autoprefixer()]).process(source, {
    from: SOURCE_FILE,
    to: OUTPUT_FILE,
    map: false
  });

  const warnings = result.warnings();
  for (const warning of warnings) {
    console.warn(warning.toString());
  }

  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(OUTPUT_FILE, `${GENERATED_HEADER}${result.css.trimEnd()}\n`, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
