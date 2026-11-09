import type { Metadata } from "next";
import type { ReactNode } from "react";

import { FontPreloads } from "@/components/layout/font-preloads";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getAllTypefaces } from "@/lib/content";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import {
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  TWITTER_CREATOR
} from "@/lib/metadata";

import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: SITE_NAME,
    template: `%s • ${SITE_NAME}`
  },
  description: DEFAULT_SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME
  },
  twitter: {
    card: "summary_large_image",
    creator: TWITTER_CREATOR
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-[initial] leading-[1.15] scheme-light dark:scheme-dark [--gutter:1em] min-[1105px]:[--gutter:2em]" suppressHydrationWarning>
      <head>
        <FontPreloads />
        <script src="/assets/font-preview-fit.js" defer />
        <script id="bwt-theme-init" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <link
          href="/feed.xml"
          rel="alternate"
          title="Typefaces"
          type="application/atom+xml"
        />
      </head>
      <body className="mx-[1em] mt-24 mb-[1em] min-[1105px]:mx-[3em] min-[1105px]:mb-[3em] antialiased [text-rendering:optimizeLegibility] [font-feature-settings:'liga'_on,'clig'_on,'dlig'_off] max-[720px]:mt-22 min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100" spellCheck={false}>
        <SiteHeader typefaces={getAllTypefaces().map(({ slug, name, creator, categorySlug }) => ({
          slug, name, creator: creator.name, categorySlug
        }))} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
