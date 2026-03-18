import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CategoryPage } from "@/components/category-page";
import { PageShell } from "@/components/page-shell";
import { getSiteData, getTypefacesByCategory } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

const site = getSiteData();
const category = site.categoriesBySlug.get("sans-serif")!;

export const metadata = buildPageMetadata({
  title: category.title,
  description:
    category.description ??
    "Discover the best free fonts from Google and across the web. See beautiful examples, recommended pairings, OpenType features, and more.",
  path: category.permalink
});

export default function SansSerifPage() {
  return (
    <PageShell bodyClass={category.bodyClass}>
      <BreadcrumbJsonLd
        value={buildBreadcrumbJsonLd([
          { name: "Free & Open-Source Fonts", path: "/" },
          { name: "Sans-Serif", path: category.permalink }
        ])}
      />
      <CategoryPage
        heading="Sans-Serif Typefaces"
        samplesByTypefaceName={site.sampleByTypefaceName}
        typefaces={getTypefacesByCategory("sans-serif")}
      />
    </PageShell>
  );
}
