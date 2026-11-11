import Link from "next/link";

import type { CSSProperties } from "react";
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
      <Link className="group/card flex min-w-0 w-full grow flex-col content-center justify-center p-0 text-inherit h-52 outline-none [content-visibility:auto] max-[1104px]:h-44 max-[720px]:aspect-7/2 max-[720px]:h-auto max-[720px]:min-h-26" href={getTypefacePath(typeface.slug)}>
        <div
          className="@container m-0 flex h-full w-full min-w-0 max-w-none items-center justify-center overflow-hidden text-center"
          data-preview-stage={eager ? "eager" : ""}
          style={{ "--preview-family": `"BWT Preview ${typeface.slug}"` } as CSSProperties}
          suppressHydrationWarning
        >
          <div className="relative flex h-full w-full min-w-0 flex-col items-center justify-center">
            <div className="absolute inset-x-0 bottom-[40%] flex h-0 items-end justify-center min-[721px]:bottom-[35%]">
              <div
                className="w-max shrink-0 text-[10rem] font-normal not-italic leading-none [font-family:var(--specimen-font,inherit)] origin-bottom [transform:scale(var(--specimen-scale,1))] opacity-[var(--specimen-title-opacity,0)]"
                data-font-preview={typeface.slug}
              >
                <h1 className="m-0 whitespace-nowrap text-[1em] font-normal not-italic leading-[1.1] [text-box-trim:trim-end] [text-box-edge:cap_alphabetic]">
                  {typeface.name}
                </h1>
              </div>
            </div>
            <p className="absolute inset-x-0 bottom-2 m-0 max-w-full px-2 font-(family-name:--ui-face) text-xs max-[720px]:@min-[21rem]:text-sm min-[721px]:text-lg leading-6 font-normal not-italic text-neutral-500 dark:text-neutral-400 transition-colors duration-200 group-hover/card:text-inherit group-focus-visible/card:text-inherit motion-reduce:transition-none min-[721px]:bottom-4">
              {typeface.creator.name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
