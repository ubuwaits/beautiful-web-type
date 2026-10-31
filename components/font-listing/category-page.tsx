import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

import { BreadcrumbJsonLd } from "@/components/layout/breadcrumb-jsonld";
import { PageShell } from "@/components/layout/page-shell";
import { SampleCard } from "@/components/font-listing/sample-card";
import { SampleIndex } from "@/components/font-listing/sample-index";
import { getTypefacesByCategory, type CategorySlug } from "@/lib/content";

export function CategoryPage({ categorySlug }: { categorySlug: CategorySlug }) {
  const { name } = categories[categorySlug];
  return (
    <PageShell bodyClass={categorySlug}>
      <BreadcrumbJsonLd items={[
        { name: "Free & Open-Source Fonts", path: "/" },
        { name, path: `/${categorySlug}/` }
      ]} />
      <SampleIndex>
        <div className="col-span-12 page-header center">
          <h1>{name} Typefaces</h1>
        </div>
        {getTypefacesByCategory(categorySlug).map((typeface) => (
          <SampleCard key={typeface.slug} typeface={typeface} />
        ))}
      </SampleIndex>
    </PageShell>
  );
}

const categories: Record<CategorySlug, { name: string; title: string; description: string }> = {
  display: {
    name: "Display",
    title: "In-Depth Guide to the Best Free Headline & Display Fonts",
    description: "Explore the best free display and headline fonts, with specimens, and detailed guides."
  },
  monospaced: {
    name: "Monospaced",
    title: "In-Depth Guide to the Best Free Monospaced Fonts",
    description: "Explore the best free monospaced fonts, with specimens, OpenType features, and detailed guides."
  },
  "sans-serif": {
    name: "Sans-Serif",
    title: "In-Depth Guide to the Best Free Sans-Serif Fonts",
    description: "Explore the best free sans-serif fonts, with specimens, OpenType features, and detailed guides."
  },
  serif: {
    name: "Serif",
    title: "In-Depth Guide to the Best Free Serif Fonts",
    description: "Explore the best free serif fonts, with specimens, OpenType features, and detailed guides."
  }
};

export function getCategoryMetadata(categorySlug: CategorySlug): Metadata {
  const { title, description } = categories[categorySlug];
  return {
    title,
    description,
    ...createPageMetadata({ title, description, path: `/${categorySlug}/` })
  };
}
