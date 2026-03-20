import type { Metadata } from "next";

import { CategoryRoutePage } from "@/components/category-route-page";

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Serif Fonts",
  alternates: {
    canonical: "/serif/"
  }
};

export default function SerifPage() {
  return (
    <CategoryRoutePage
      bodyClass="serif"
      breadcrumbLabel="Serif"
      categorySlug="serif"
      heading="Serif Typefaces"
      path="/serif/"
    />
  );
}
