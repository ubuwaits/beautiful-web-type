import Link from "next/link";

import { FittedSpecimenText } from "@/components/fitted-specimen-text";
import type { TextData, Typeface } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

type SampleCardProps = {
  specimen: TextData["specimen"];
  typeface: Typeface;
  variant?: "grid" | "hero";
};

export function SampleCard({ specimen, typeface, variant = "grid" }: SampleCardProps) {
  const typefacePath = getTypefacePath(typeface.slug);
  const sampleText = typeface.sampleText ?? specimen.primary;

  return (
    <div
      className="sample standardized-sample gr6 gc12"
      data-testid="typeface-card"
      data-variant={variant}
    >
      <Link href={typefacePath}>
        <div className="text standardized-specimen">
          <FittedSpecimenText
            sampleClassName={typeface.sampleClasses}
            text={sampleText}
            typefaceClassName={typeface.slug}
            variant={variant}
          />
        </div>
      </Link>
      <div className="meta">
        <p className="name">
          <Link href={typefacePath}>
            {typeface.name} by {typeface.creator.name}
          </Link>
        </p>
      </div>
    </div>
  );
}
