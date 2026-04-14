import type { Metadata } from "next";

import { CategoryRoutePage } from "@/components/category-route-page";
import { createPageMetadata } from "@/lib/metadata";

const title = "In-Depth Guide to the Best Free Sans-Serif Fonts";
const description =
  "Explore the best free sans-serif fonts, with specimens, pairings, OpenType features, and detailed guides.";

export const metadata: Metadata = {
  title,
  description,
  ...createPageMetadata({
    title,
    description,
    path: "/sans-serif/"
  })
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
