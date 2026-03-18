import Link from "next/link";

import type { Sample, Typeface } from "@/lib/content";

type SampleCardProps = {
  sample: Sample;
  typeface: Typeface;
};

export function SampleCard({ sample, typeface }: SampleCardProps) {
  return (
    <div className={`sample ${typeface.slug} ${typeface.slug}-sample gr6 gc12`}>
      <Link href={`/${typeface.slug}/`}>
        <div className="text" dangerouslySetInnerHTML={{ __html: sample.bodyHtml }} />
      </Link>
      <div className={`meta ${sample.sampleShade === "light" ? "dark" : ""}`}>
        <p className="name">
          <Link href={`/${typeface.slug}/`}>
            {typeface.name} by {typeface.creator.name}
          </Link>
        </p>
      </div>
    </div>
  );
}
