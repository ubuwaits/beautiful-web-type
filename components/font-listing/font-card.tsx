import Link from "next/link";

import { FittedSpecimenText } from "@/components/typography/fitted-specimen-text";
import type { Typeface } from "@/lib/content";
import { getTypefacePath } from "@/lib/routes";

type FontCardProps = {
  typeface: Typeface;
  eager?: boolean;
};

export function FontCard({ typeface, eager = false }: FontCardProps) {
  return (
    <div
      className="flex flex-col justify-center bg-white dark:bg-neutral-950 min-w-0 col-span-12 [--sample-fit-width:0.8] min-[721px]:col-span-6 max-[720px]:[--sample-fit-width:0.85]"
      data-testid="typeface-card"
    >
      <Link className="group/card flex min-w-0 w-full grow flex-col content-center justify-center p-0 text-inherit h-64 outline-none [content-visibility:auto] max-[1104px]:h-56 max-[720px]:aspect-3/1 max-[720px]:h-auto max-[720px]:min-h-28" href={getTypefacePath(typeface.slug)}>
        <FittedSpecimenText typeface={{ slug: typeface.slug, name: typeface.name, creator: { name: typeface.creator.name } }} fontFamily={`"BWT Preview ${typeface.slug}"`} defer={!eager} />
      </Link>
    </div>
  );
}
