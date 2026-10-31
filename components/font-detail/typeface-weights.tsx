"use client";

import { useCallback, useRef, type CSSProperties } from "react";
import { setFitScale, useTextFit } from "@/components/typography/use-text-fit";
import type { Weight } from "@/lib/content";

export function TypefaceWeights({ weights, italic }: { weights: Weight[]; italic?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const fit = useCallback((root: HTMLDivElement) => {
    const rows = Array.from(root.querySelectorAll<HTMLElement>("[data-weight-row]"));
    if (!rows.length) return;
    const width = Math.max(...rows.map((row) => row.getBoundingClientRect().width));
    const size = parseFloat(getComputedStyle(rows[0]).fontSize);
    // Fit the longest sample so all weights retain one consistent size.
    if (width > 0) setFitScale(root, "--weight-scale", size / width * 0.98);
  }, [weights, italic]);
  useTextFit(ref, fit);

  return (
    <div className="type-weight-list @container w-full min-w-0 text-left" ref={ref} style={{ "--weight-scale": 0.07 } as CSSProperties}>
      <div className="grid auto-rows-fr gap-y-4 text-[calc(100cqw*var(--weight-scale))] leading-none [&_p]:[text-box-trim:trim-both] [&_p]:[text-box-edge:cap_alphabetic]">
        {weights.map((weight) => (
          <div className="flex w-max items-baseline gap-x-[0.3em] pb-[0.35cap] whitespace-nowrap" data-weight-row="" key={weight.weight}>
            <p style={{ fontWeight: weight.weight }}>{weight.name}</p>
            {italic ? <p style={{ fontWeight: weight.weight }}><em>Italic</em></p> : null}
            <p className="text-[0.55em] font-normal text-neutral-500 dark:text-neutral-400">{weight.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
