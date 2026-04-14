import type { Metadata } from "next";

import { CategoryRoutePage } from "@/components/category-route-page";
import { createPageMetadata } from "@/lib/metadata";

const title = "In-Depth Guide to the Best Free Monospaced Fonts";
const description =
  "Explore the best free monospaced fonts, with specimens, pairings, OpenType features, and detailed guides.";

export const metadata: Metadata = {
  title,
  description,
  ...createPageMetadata({
    title,
    description,
    path: "/monospaced/"
  })
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
