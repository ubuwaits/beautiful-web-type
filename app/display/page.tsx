import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CategoryPage } from "@/components/category-page";
import { PageShell } from "@/components/page-shell";
import { getSiteData, getTypefacesByCategory } from "@/lib/content";

const site = getSiteData();

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Headline & Display Fonts",
  alternates: {
    canonical: "/display/"
  }
};

export default function DisplayPage() {
  return (
    <PageShell bodyClass="display">
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: "Display", path: "/display/" }
        ]}
      />
      <CategoryPage
        heading="Display Typefaces"
        samplesByTypefaceName={site.sampleByTypefaceName}
        typefaces={getTypefacesByCategory("display")}
      />
    </PageShell>
  );
}
