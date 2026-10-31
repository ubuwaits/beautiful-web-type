import Link from "next/link";

import { FittedSpecimenText } from "@/components/typography/fitted-specimen-text";
import type { Typeface } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

type SampleCardProps = {
  typeface: Typeface;
};

export function SampleCard({ typeface }: SampleCardProps) {
  return (
    <div
      className="sample standardized-sample min-w-0 col-span-12 [--sample-fit-width:0.8]! min-[721px]:col-span-6 max-[720px]:[--sample-fit-width:0.85]!"
      data-testid="typeface-card"
      data-variant="grid"
    >
      <Link className="min-w-0 w-full h-64! rounded-xl transition-[background-color] hover:bg-neutral-100 focus-visible:bg-neutral-100 dark:hover:bg-neutral-900 dark:focus-visible:bg-neutral-900 max-[1104px]:h-56! max-[720px]:aspect-3/1! max-[720px]:h-auto! max-[720px]:min-h-28! max-[720px]:rounded-md" href={getTypefacePath(typeface.slug)}>
        <FittedSpecimenText typeface={typeface} />
      </Link>
    </div>
  );
}
