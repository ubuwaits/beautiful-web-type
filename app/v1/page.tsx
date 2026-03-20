import fs from "node:fs";
import path from "node:path";

import { buildPageMetadata } from "@/lib/seo";

const LEGACY_V1_PATH = path.join(process.cwd(), "v1/index.html");

function extractBodyHtml(html: string): string {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!match) {
    throw new Error(`Unable to find legacy v1 body markup in ${LEGACY_V1_PATH}`);
  }

  return match[1].trim();
}

const legacyBodyHtml = extractBodyHtml(fs.readFileSync(LEGACY_V1_PATH, "utf8"));

export const metadata = buildPageMetadata({
  title: "Beautiful Web Type - the best typefaces from Google Fonts",
  description: "A showcase of the best typefaces from the Google web fonts directory.",
  path: "/v1/"
});

export default function LegacyV1Page() {
  return (
    <>
      <link href="/v1/stylesheets/application.css" media="screen" rel="stylesheet" />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css?family=Abril+Fatface|Open+Sans:300,400,600,700,800|Gentium+Book+Basic:400,400italic|Vollkorn:400italic,400"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Gravitas+One|Lato:100,900|Old+Standard+TT:400,400italic|PT+Serif:400|PT+Sans+Narrow:700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=PT+Sans:700|Merriweather:400,900|Playfair+Display:400,900,700italic|Oswald:700|PT+Mono"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Cardo:400,400italic"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500|Vidaloka" rel="stylesheet" />
      <style>{`
        .legacy-v1,
        .legacy-v1 *,
        .legacy-v1 *::before,
        .legacy-v1 *::after {
          box-sizing: content-box;
        }

        header.site-header,
        .mobile-menu,
        .menu-overlay,
        footer.grid {
          display: none !important;
        }
      `}</style>
      <div className="legacy-v1" dangerouslySetInnerHTML={{ __html: legacyBodyHtml }} />
    </>
  );
}
