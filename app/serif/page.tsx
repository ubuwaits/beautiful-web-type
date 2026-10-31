import { CategoryPage, getCategoryMetadata } from "@/components/font-listing/category-page";

export const metadata = getCategoryMetadata("serif");

export default function SerifPage() {
  return <CategoryPage categorySlug="serif" />;
}
