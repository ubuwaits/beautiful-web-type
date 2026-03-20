import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CategoryPage } from "@/components/category-page";
import { PageShell } from "@/components/page-shell";
import { getSiteData, getTypefacesByCategory } from "@/lib/content";

const site = getSiteData();

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Serif Fonts",
  alternates: {
    canonical: "/serif/"
  }
};

export default function SerifPage() {
  return (
    <PageShell bodyClass="serif">
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: "Serif", path: "/serif/" }
        ]}
      />
      <CategoryPage
        heading="Serif Typefaces"
        samplesByTypefaceName={site.sampleByTypefaceName}
        typefaces={getTypefacesByCategory("serif")}
      />
    </PageShell>
  );
}
