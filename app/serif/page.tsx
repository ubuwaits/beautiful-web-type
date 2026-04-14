import type { Metadata } from "next";

import { CategoryRoutePage } from "@/components/category-route-page";
import { createPageMetadata } from "@/lib/metadata";

const title = "In-Depth Guide to the Best Free Serif Fonts";
const description =
  "Explore the best free serif fonts, with specimens, pairings, OpenType features, and detailed guides.";

export const metadata: Metadata = {
  title,
  description,
  ...createPageMetadata({
    title,
    description,
    path: "/serif/"
  })
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
