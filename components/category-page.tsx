import { SampleCard } from "@/components/sample-card";
import type { Sample, Typeface } from "@/lib/content";

type CategoryPageProps = {
  heading: string;
  samplesByTypefaceName: Map<string, Sample>;
  typefaces: Typeface[];
};

export function CategoryPage({
  heading,
  samplesByTypefaceName,
  typefaces
}: CategoryPageProps) {
  return (
    <div className="samples grid">
      <div className="gr1 gc12 page-header center">
        <h1>{heading}</h1>
      </div>

      {typefaces.map((typeface) => {
        const sample = samplesByTypefaceName.get(typeface.name);

        if (!sample) {
          return null;
        }

        return <SampleCard key={typeface.slug} sample={sample} typeface={typeface} />;
      })}
    </div>
  );
}
