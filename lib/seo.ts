import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/content";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  imagePath = "/assets/images/card.png"
}: MetadataOptions): Metadata {
  return {
    title: `${title} • ${SITE_NAME}`,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      images: [imagePath]
    },
    twitter: {
      card: "summary_large_image",
      creator: "@ubuwaits"
    }
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): string {
  return JSON.stringify(
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: new URL(item.path, SITE_URL).toString()
      }))
    },
    null,
    2
  );
}
