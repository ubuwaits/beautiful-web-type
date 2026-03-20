import { toAbsoluteUrl } from "@/lib/routes";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const value = JSON.stringify(
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: toAbsoluteUrl(item.path)
      }))
    },
    null,
    2
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: value }} />;
}
