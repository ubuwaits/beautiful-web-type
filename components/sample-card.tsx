import Link from "next/link";

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
        <div className={`text standardized-specimen ${typeface.slug} flex flex-col items-center justify-center gap-3 text-center font-normal not-italic`}>
          <h1 className="m-0 text-(length:--ms4) leading-tight font-normal not-italic min-[721px]:text-(length:--ms5)">
            {typeface.name}
          </h1>
          <p className={`m-0 text-(length:--ms1) leading-snug font-normal not-italic min-[721px]:text-(length:--ms2) ${variant === "hero" ? "text-neutral-400" : "text-neutral-500"}`}>
            {typeface.creator.name}
          </p>
        </div>
      </Link>
    </div>
  );
}
