import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { GlyphInspector } from "@/components/glyph-inspector";
import { PageShell } from "@/components/page-shell";
import { getSiteData } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

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

  return buildPageMetadata({
    title: `${typeface.name} Glyph Inspector`,
    description: `Explore the complete character set for the free font ${typeface.name}`,
    imagePath: `/assets/images/${typeface.slug}.png`,
    path: `/${typeface.slug}/glyphs/`
  });
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
        value={buildBreadcrumbJsonLd([
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: typeface.category, path: `/${typeface.categorySlug}/` },
          { name: typeface.name, path: `/${typeface.slug}/` },
          { name: "Glyph Inspector", path: `/${typeface.slug}/glyphs/` }
        ])}
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
