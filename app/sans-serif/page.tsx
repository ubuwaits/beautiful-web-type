import type { Metadata } from "next";

import { CategoryRoutePage } from "@/components/category-route-page";

export const metadata: Metadata = {
  title: "In-Depth Guide to the Best Free Sans-Serif Fonts",
  alternates: {
    canonical: "/sans-serif/"
  }
};

export default function SansSerifPage() {
  return (
    <CategoryRoutePage
      bodyClass="sans-serif"
      breadcrumbLabel="Sans-Serif"
      categorySlug="sans-serif"
      heading="Sans-Serif Typefaces"
      path="/sans-serif/"
    />
  );
}
