import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { GlyphInspector } from "@/components/glyph-inspector";
import { PageShell } from "@/components/page-shell";
import { getAllTypefaceSlugs, getGlyphPageBySlug, getTypefaceBySlug } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getGlyphPath, getTypefacePath } from "@/lib/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTypefaceSlugs().map((typefaceSlug) => ({ typefaceSlug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ typefaceSlug: string }>;
}): Promise<Metadata> {
  const { typefaceSlug } = await params;
  const typeface = getTypefaceBySlug(typefaceSlug);

  if (!typeface) {
    return {};
  }

  const title = `${typeface.name} Glyph Inspector`;
  const description = `Explore the complete character set for the free font ${typeface.name}`;
  const imagePath = `/assets/images/${typeface.slug}.png`;
  const path = getGlyphPath(typeface.slug);

  return {
    title,
    description,
    ...createPageMetadata({
      title,
      description,
      path,
      imagePath
    })
  };
}

export default async function GlyphPage({
  params
}: {
  params: Promise<{ typefaceSlug: string }>;
}) {
  const { typefaceSlug } = await params;
  const typeface = getTypefaceBySlug(typefaceSlug);
  const glyphPage = getGlyphPageBySlug(typefaceSlug);

  if (!typeface || !glyphPage) {
    notFound();
  }

  return (
    <PageShell bodyClass={glyphPage.bodyClass}>
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: typeface.category, path: `/${typeface.categorySlug}/` },
          { name: typeface.name, path: getTypefacePath(typeface.slug) },
          { name: "Glyph Inspector", path: getGlyphPath(typeface.slug) }
        ]}
      />
      <GlyphInspector
        fontClassName={typeface.slug}
        fontFile={glyphPage.fontFile}
        typefaceName={typeface.name}
        typefacePath={getTypefacePath(typeface.slug)}
      />
    </PageShell>
  );
}
