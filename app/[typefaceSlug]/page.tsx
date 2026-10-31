import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BreadcrumbJsonLd } from "@/components/layout/breadcrumb-jsonld";
import { PageShell } from "@/components/layout/page-shell";
import { TypefaceDetail } from "@/components/font-detail/typeface-detail";
import {
  getAllTypefaceSlugs,
  getTextData,
  getTypefaceBySlug
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getTypefacePath } from "@/lib/routes";

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

  const title = `Complete Guide to ${typeface.name}`;
  const description = `Complete guide to the free font ${typeface.name}. See beautiful examples, OpenType features, and more.`;
  const imagePath = `/assets/images/${typeface.slug}.png`;
  const path = getTypefacePath(typeface.slug);

  return createPageMetadata({ title, description, path, imagePath });
}

export default async function TypefacePage({
  params
}: {
  params: Promise<{ typefaceSlug: string }>;
}) {
  const { typefaceSlug } = await params;
  const typeface = getTypefaceBySlug(typefaceSlug);

  if (!typeface) {
    notFound();
  }

  const text = getTextData();

  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: typeface.category, path: `/${typeface.categorySlug}/` },
          { name: typeface.name, path: getTypefacePath(typeface.slug) }
        ]}
      />
      <TypefaceDetail glyphFontFile={typeface.fontFile} text={text} typeface={typeface} />
    </PageShell>
  );
}
