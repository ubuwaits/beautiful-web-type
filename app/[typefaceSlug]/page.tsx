import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PageShell } from "@/components/page-shell";
import { TypefaceDetail } from "@/components/typeface-detail";
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
    title: `Complete Guide to ${typeface.name}`,
    description: `Complete guide to the free font ${typeface.name}. See beautiful examples, recommended pairings, OpenType features, and more.`,
    imagePath: `/assets/images/${typeface.slug}.png`,
    path: `/${typeface.slug}/`
  });
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
        value={buildBreadcrumbJsonLd([
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: typeface.category, path: `/${typeface.categorySlug}/` },
          { name: typeface.name, path: `/${typeface.slug}/` }
        ])}
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
