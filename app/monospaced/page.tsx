import { CategoryPage, getCategoryMetadata } from "@/components/font-listing/category-page";

export const metadata = getCategoryMetadata("monospaced");

export default function MonospacedPage() {
  return <CategoryPage categorySlug="monospaced" />;
}
