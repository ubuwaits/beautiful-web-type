import { CategoryPage, getCategoryMetadata } from "@/components/font-listing/category-page";

export const metadata = getCategoryMetadata("display");

export default function DisplayPage() {
  return <CategoryPage categorySlug="display" />;
}
