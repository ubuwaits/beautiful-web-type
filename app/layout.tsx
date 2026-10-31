import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import { FontPreloads } from "@/components/font-preloads";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { getAllTypefaces } from "@/lib/content";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import {
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  TWITTER_CREATOR
} from "@/lib/metadata";

import "./globals.css";
import "@/css/src/application.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <FontPreloads />
        <Script id="bwt-theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <link
          href="/feed.xml"
          rel="alternate"
          title="Typefaces"
          type="application/atom+xml"
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100" spellCheck={false}>
        <SiteHeader typefaces={getAllTypefaces().map(({ slug, name, creator, categorySlug }) => ({
          slug, name, creator: creator.name, categorySlug
        }))} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
