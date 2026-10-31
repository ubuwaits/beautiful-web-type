import { SampleCard } from "@/components/font-listing/sample-card";
import { SampleIndex } from "@/components/font-listing/sample-index";
import type { Typeface } from "@/lib/content";

type CategoryPageProps = {
  heading: string;
  typefaces: Typeface[];
};

export function CategoryPage({ heading, typefaces }: CategoryPageProps) {
  return (
    <SampleIndex>
      <div className="col-span-12 page-header center">
        <h1>{heading}</h1>
      </div>

      {typefaces.map((typeface) => (
        <SampleCard key={typeface.slug} typeface={typeface} />
      ))}
    </SampleIndex>
  );
}
