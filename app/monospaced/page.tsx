import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CategoryPage } from "@/components/category-page";
import { PageShell } from "@/components/page-shell";
import { getTypefacesByCategory } from "@/lib/content";

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
        typefaces={getTypefacesByCategory("monospaced")}
      />
    </PageShell>
  );
}
