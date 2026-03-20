import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const SITE_NAME = "Beautiful Web Type";
const SITE_ORIGIN = "https://www.beautifulwebtype.com";
const DEFAULT_SITE_DESCRIPTION =
  "Discover the best free fonts from Google and across the web. See beautiful examples, recommended pairings, OpenType features, and more.";
const DEFAULT_SOCIAL_IMAGE_PATH = "/assets/images/card.png";
const TWITTER_CREATOR = "@ubuwaits";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: SITE_NAME,
    template: `%s • ${SITE_NAME}`
  },
  description: DEFAULT_SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    siteName: SITE_NAME,
    description: DEFAULT_SITE_DESCRIPTION,
    url: SITE_ORIGIN,
    images: [DEFAULT_SOCIAL_IMAGE_PATH]
  },
  twitter: {
    card: "summary_large_image",
    creator: TWITTER_CREATOR,
    images: [DEFAULT_SOCIAL_IMAGE_PATH]
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
        <Analytics />
      </body>
    </html>
  );
}
