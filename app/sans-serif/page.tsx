import { CategoryPage, getCategoryMetadata } from "@/components/font-listing/category-page";

export const metadata = getCategoryMetadata("sans-serif");

export default function SansSerifPage() {
  return <CategoryPage categorySlug="sans-serif" />;
}
