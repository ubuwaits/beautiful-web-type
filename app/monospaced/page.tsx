import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CategoryPage } from "@/components/category-page";
import { PageShell } from "@/components/page-shell";
import { getSiteData, getTypefacesByCategory } from "@/lib/content";

const site = getSiteData();

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Monospaced Fonts",
  alternates: {
    canonical: "/monospaced/"
  }
};

export default function MonospacedPage() {
  return (
    <PageShell bodyClass="monospaced">
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: "Monospaced", path: "/monospaced/" }
        ]}
      />
      <CategoryPage
        heading="Monospaced Typefaces"
        samplesByTypefaceName={site.sampleByTypefaceName}
        typefaces={getTypefacesByCategory("monospaced")}
      />
    </PageShell>
  );
}
