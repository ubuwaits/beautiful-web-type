import Link from "next/link";

import { FittedSpecimenText } from "@/components/fitted-specimen-text";
import type { Typeface } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

type SampleCardProps = {
  typeface: Typeface;
  variant?: "grid" | "hero";
};

export function SampleCard({ typeface, variant = "grid" }: SampleCardProps) {
  return (
    <div
      className="sample standardized-sample col-span-12"
      data-testid="typeface-card"
      data-variant={variant}
    >
      <Link href={getTypefacePath(typeface.slug)}>
        <FittedSpecimenText typeface={typeface} />
      </Link>
    </div>
  );
}
