import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

import { BreadcrumbJsonLd } from "@/components/layout/breadcrumb-jsonld";
import { PageShell } from "@/components/layout/page-shell";
import { FontCard } from "@/components/font-listing/font-card";
import { FontGrid } from "@/components/font-listing/font-grid";
import { getTypefacesByCategory, type CategorySlug } from "@/lib/content";

export function CategoryPage({ categorySlug }: { categorySlug: CategorySlug }) {
  const { name } = categories[categorySlug];
  return (
    <PageShell>
      <BreadcrumbJsonLd items={[
        { name: "Free & Open-Source Fonts", path: "/" },
        { name, path: `/${categorySlug}/` }
      ]} />
      <FontGrid>
        <div className="col-span-12 page-header mt-6 mb-8 text-center max-[1104px]:mt-4 max-[1104px]:mb-6">
          <h1 className="font-(family-name:--alegreya-sans) text-7xl leading-16 font-normal italic max-[1104px]:text-4xl max-[1104px]:leading-8">{name} Typefaces</h1>
        </div>
        {getTypefacesByCategory(categorySlug).map((typeface) => (
          <FontCard key={typeface.slug} typeface={typeface} />
        ))}
      </FontGrid>
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
  return createPageMetadata({ title, description, path: `/${categorySlug}/` });
}
