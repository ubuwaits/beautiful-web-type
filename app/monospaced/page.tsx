import type { Metadata } from "next";

import { CategoryRoutePage } from "@/components/category-route-page";

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Monospaced Fonts",
  alternates: {
    canonical: "/monospaced/"
  }
};

export default function MonospacedPage() {
  return (
    <CategoryRoutePage
      bodyClass="monospaced"
      breadcrumbLabel="Monospaced"
      categorySlug="monospaced"
      heading="Monospaced Typefaces"
      path="/monospaced/"
    />
  );
}
