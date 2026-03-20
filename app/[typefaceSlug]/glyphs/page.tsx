import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { GlyphInspector } from "@/components/glyph-inspector";
import { PageShell } from "@/components/page-shell";
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

  const title = `${typeface.name} Glyph Inspector`;
  const description = `Explore the complete character set for the free font ${typeface.name}`;
  const imagePath = `/assets/images/${typeface.slug}.png`;
  const path = `/${typeface.slug}/glyphs/`;

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

export default async function GlyphPage({
  params
}: {
  params: Promise<{ typefaceSlug: string }>;
}) {
  const { typefaceSlug } = await params;
  const site = getSiteData();
  const typeface = site.typefaceBySlug.get(typefaceSlug);
  const glyphPage = site.glyphPageBySlug.get(typefaceSlug);

  if (!typeface || !glyphPage) {
    notFound();
  }

  return (
    <PageShell bodyClass={glyphPage.bodyClass}>
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: typeface.category, path: `/${typeface.categorySlug}/` },
          { name: typeface.name, path: `/${typeface.slug}/` },
          { name: "Glyph Inspector", path: `/${typeface.slug}/glyphs/` }
        ]}
      />
      <GlyphInspector
        fontClassName={typeface.slug}
        fontFile={glyphPage.fontFile}
        typefaceName={typeface.name}
        typefacePath={`/${typeface.slug}/`}
      />
    </PageShell>
  );
}
