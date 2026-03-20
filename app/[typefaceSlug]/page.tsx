import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PageShell } from "@/components/page-shell";
import { TypefaceDetail } from "@/components/typeface-detail";
import { getSiteData } from "@/lib/content";

export const dynamicParams = false;

const SITE_NAME = "Beautiful Web Type";
const TWITTER_CREATOR = "@ubuwaits";

export function generateStaticParams() {
  return getSiteData().typefaces.map((typeface) => ({
    typefaceSlug: typeface.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ typefaceSlug: string }>;
}): Promise<Metadata> {
  const { typefaceSlug } = await params;
  const typeface = getSiteData().typefaceBySlug.get(typefaceSlug);

  if (!typeface) {
    return {};
  }

  const title = `Complete Guide to ${typeface.name}`;
  const description = `Complete guide to the free font ${typeface.name}. See beautiful examples, recommended pairings, OpenType features, and more.`;
  const imagePath = `/assets/images/${typeface.slug}.png`;
  const path = `/${typeface.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      siteName: SITE_NAME,
      description,
      url: path,
      images: [imagePath]
    },
    twitter: {
      card: "summary_large_image",
      creator: TWITTER_CREATOR,
      images: [imagePath]
    }
  };
}

export default async function TypefacePage({
  params
}: {
  params: Promise<{ typefaceSlug: string }>;
}) {
  const { typefaceSlug } = await params;
  const site = getSiteData();
  const typeface = site.typefaceBySlug.get(typefaceSlug);

  if (!typeface) {
    notFound();
  }

  const sample = site.sampleByTypefaceName.get(typeface.name);

  if (!sample) {
    notFound();
  }

  const pairings = site.pairingsByTypefaceName.get(typeface.name) ?? [];

  return (
    <PageShell bodyClass={typeface.bodyClass}>
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: typeface.category, path: `/${typeface.categorySlug}/` },
          { name: typeface.name, path: `/${typeface.slug}/` }
        ]}
      />
      <TypefaceDetail
        pairings={pairings}
        sampleBody={sample.bodyHtml}
        text={site.text}
        typeface={typeface}
      />
    </PageShell>
  );
}
