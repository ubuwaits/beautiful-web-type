import { SampleCard } from "@/components/sample-card";
import { SampleIndex } from "@/components/sample-index";
import { getTextData } from "@/lib/content";
import type { Typeface } from "@/lib/content";

type CategoryPageProps = {
  heading: string;
  typefaces: Typeface[];
};

export function CategoryPage({ heading, typefaces }: CategoryPageProps) {
  const specimen = getTextData().specimen;

  return (
    <SampleIndex>
      <div className="col-span-12 page-header center">
        <h1>{heading}</h1>
      </div>

      {typefaces.map((typeface) => (
        <SampleCard key={typeface.slug} specimen={specimen} typeface={typeface} />
      ))}
    </SampleIndex>
  );
}
