type BreadcrumbJsonLdProps = {
  value: string;
};

export function BreadcrumbJsonLd({ value }: BreadcrumbJsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: value }} />;
}
