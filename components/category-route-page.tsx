import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CategoryPage } from "@/components/category-page";
import { PageShell } from "@/components/page-shell";
import { getTypefacesByCategory } from "@/lib/content";
import type { CategorySlug } from "@/lib/content";

type CategoryRoutePageProps = {
  breadcrumbLabel: string;
  bodyClass: string;
  categorySlug: CategorySlug;
  heading: string;
  path: string;
};

export function CategoryRoutePage({
  breadcrumbLabel,
  bodyClass,
  categorySlug,
  heading,
  path
}: CategoryRoutePageProps) {
  return (
    <PageShell bodyClass={bodyClass}>
      <BreadcrumbJsonLd
        items={[
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: breadcrumbLabel, path }
        ]}
      />
      <CategoryPage heading={heading} typefaces={getTypefacesByCategory(categorySlug)} />
    </PageShell>
  );
}
