import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CategoryPage } from "@/components/category-page";
import { PageShell } from "@/components/page-shell";
import { getTypefacesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Sans-Serif Fonts",
  alternates: {
    canonical: "/sans-serif/"
  }
};

export default function SansSerifPage() {
  return (
    <PageShell bodyClass="sans-serif">
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: "Sans-Serif", path: "/sans-serif/" }
        ]}
      />
      <CategoryPage
        heading="Sans-Serif Typefaces"
        typefaces={getTypefacesByCategory("sans-serif")}
      />
    </PageShell>
  );
}
