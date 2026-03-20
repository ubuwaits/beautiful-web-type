import { SampleCard } from "@/components/sample-card";
import { getSampleForTypeface } from "@/lib/content";
import type { Typeface } from "@/lib/content";

type CategoryPageProps = {
  heading: string;
  typefaces: Typeface[];
};

export function CategoryPage({ heading, typefaces }: CategoryPageProps) {
  return (
    <div className="samples grid">
      <div className="gr1 gc12 page-header center">
        <h1>{heading}</h1>
      </div>

      {typefaces.map((typeface) => {
        const sample = getSampleForTypeface(typeface.name);

        if (!sample) {
          return null;
        }

        return <SampleCard key={typeface.slug} sample={sample} typeface={typeface} />;
      })}
    </div>
  );
}
