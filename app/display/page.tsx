import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CategoryPage } from "@/components/category-page";
import { PageShell } from "@/components/page-shell";
import { getTypefacesByCategory } from "@/lib/content";

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
      <CategoryPage heading="Display Typefaces" typefaces={getTypefacesByCategory("display")} />
    </PageShell>
  );
}
