import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { DEFAULT_SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/content";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: DEFAULT_SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_SITE_DESCRIPTION,
    url: SITE_URL,
    images: ["/assets/images/card.png"]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ubuwaits"
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ]
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
        <Script
          data-cf-beacon='{"token": "72080d8c1b674ef5a1b594f9948af293"}'
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
