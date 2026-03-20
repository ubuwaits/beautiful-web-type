import type { Metadata } from "next";

import { CategoryRoutePage } from "@/components/category-route-page";

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Headline & Display Fonts",
  alternates: {
    canonical: "/display/"
  }
};

export default function DisplayPage() {
  return (
    <CategoryRoutePage
      bodyClass="display"
      breadcrumbLabel="Display"
      categorySlug="display"
      heading="Display Typefaces"
      path="/display/"
    />
  );
}
