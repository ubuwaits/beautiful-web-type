import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import {
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  TWITTER_CREATOR
} from "@/lib/metadata";

import "./globals.css";

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
    <html lang="en">
      <head>
        <link href="/css/application.css" media="screen" rel="stylesheet" type="text/css" />
        <link
          href="/feed.xml"
          rel="alternate"
          title="Typefaces"
          type="application/atom+xml"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/assets/fonts/alegreya-sans/AlegreyaSans-BlackItalic.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/assets/fonts/alegreya-sans/AlegreyaSans-Italic.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/assets/fonts/source-sans-pro/SourceSansVariable-Roman.ttf.woff2"
          rel="preload"
          type="font/woff2"
        />
      </head>
      <body className="min-h-screen" spellCheck={false}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
