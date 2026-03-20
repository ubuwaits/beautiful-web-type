const SITE_ORIGIN = "https://www.beautifulwebtype.com";

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
        item: new URL(item.path, SITE_ORIGIN).toString()
      }))
    },
    null,
    2
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: value }} />;
}
