import Link from "next/link";

import { FittedSpecimenText } from "@/components/fitted-specimen-text";
import type { Typeface } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

type SampleCardProps = {
  typeface: Typeface;
};

export function SampleCard({ typeface }: SampleCardProps) {
  return (
    <div
      className="sample standardized-sample col-span-12"
      data-testid="typeface-card"
      data-variant="grid"
    >
      <Link href={getTypefacePath(typeface.slug)}>
        <FittedSpecimenText typeface={typeface} />
      </Link>
    </div>
  );
}
