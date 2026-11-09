import Link from "next/link";

import { getTypefacesByCategory } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

export function SiteFooter() {
  const categories = [
    { slug: "sans-serif", name: "Sans-Serif" },
    { slug: "serif", name: "Serif" },
    { slug: "display", name: "Display" },
    { slug: "monospaced", name: "Monospaced" }
  ] as const;

  return (
    <footer className="layout-grid mt-8 pt-8 font-(family-name:--ui-face) max-[720px]:gap-6
      [&_h2]:mb-2 [&_h2]:text-base [&_h2]:leading-5 [&_h2]:font-semibold [&_h2]:uppercase
      [&_li]:mb-2 [&_li]:text-base [&_li]:leading-5 [&_li]:font-normal [&_a:hover]:text-neutral-500 dark:[&_a:hover]:text-neutral-400 border-t border-neutral-200/60 dark:border-neutral-800/80 [border-top-style:solid]">
      {categories.map(({ slug, name }) => (
        <div className={slug === "sans-serif"
          ? "col-span-12 min-[721px]:col-span-8 min-[1105px]:col-span-4"
          : "col-span-12 min-[721px]:col-span-4 min-[1105px]:col-span-2"} key={slug}>
          <h2><Link href={`/${slug}/`}>{name} Typefaces</Link></h2>
          <ol className={slug === "sans-serif" ? "columns-1 gap-x-6 min-[721px]:columns-2 min-[721px]:gap-x-(--gutter) [&>li]:break-inside-avoid" : undefined}>
            {getTypefacesByCategory(slug).map((font) => (
              <li key={font.slug}><Link href={getTypefacePath(font.slug)}>{font.name}</Link></li>
            ))}
          </ol>
        </div>
      ))}

      <div className="col-span-12 min-[721px]:col-span-4 min-[1105px]:col-span-2">
        <h2>Additional Info</h2>
        <ol>
          <li>
            <a href="https://www.chad.is" rel="noopener" target="_blank">
              Personal site
            </a>
          </li>
          <li>
            <a href="https://github.com/ubuwaits/beautiful-web-type" rel="noopener" target="_blank">
              Source on GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.are.na/chad-mazzola/hci-beautiful-web-type"
              rel="noopener noreferrer"
              target="_blank"
            >
              Are.na Channel
            </a>
          </li>
          <li>
            <a href="/feed.xml">Atom feed</a>
          </li>
          <li>
            <a href="/v1/">Old version of site</a>
          </li>
        </ol>
      </div>
    </footer>
  );
}
