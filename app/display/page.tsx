import type { Metadata } from "next";

import { CategoryRoutePage } from "@/components/category-route-page";
import { createPageMetadata } from "@/lib/metadata";

const title = "In-Depth Guide to the Best Free Headline & Display Fonts";
const description =
  "Explore the best free display and headline fonts, with specimens, pairings, and detailed guides.";

export const metadata: Metadata = {
  title,
  description,
  ...createPageMetadata({
    title,
    description,
    path: "/display/"
  })
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
