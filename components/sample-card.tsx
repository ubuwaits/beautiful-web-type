import Link from "next/link";

import type { Sample, Typeface } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

type SampleCardProps = {
  sample: Sample;
  typeface: Typeface;
};

export function SampleCard({ sample, typeface }: SampleCardProps) {
  const typefacePath = getTypefacePath(typeface.slug);

  return (
    <div className={`sample ${typeface.slug} ${typeface.slug}-sample gr6 gc12`}>
      <Link href={typefacePath}>
        <div className="text" dangerouslySetInnerHTML={{ __html: sample.bodyHtml }} />
      </Link>
      <div className={`meta ${sample.sampleShade === "light" ? "dark" : ""}`}>
        <p className="name">
          <Link href={typefacePath}>
            {typeface.name} by {typeface.creator.name}
          </Link>
        </p>
      </div>
    </div>
  );
}
