"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import type { Weight } from "@/lib/content";

export function TypefaceWeights({ weights, italic }: { weights: Weight[]; italic?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const rows = Array.from(root.querySelectorAll<HTMLElement>("[data-weight-row]"));
    let frame = 0;
    let disposed = false;
    const fit = () => {
      if (disposed || !rows.length) return;
      const width = Math.max(...rows.map((row) => row.getBoundingClientRect().width));
      const size = parseFloat(getComputedStyle(rows[0]).fontSize);
      if (!width) return;
      // Fit the longest sample so all weights retain one consistent size.
      const scale = size / width * 0.98;
      const previous = parseFloat(root.style.getPropertyValue("--weight-scale"));
      if (Math.abs(scale - previous) > 0.000001) root.style.setProperty("--weight-scale", String(scale));
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    document.fonts.addEventListener("loadingdone", schedule);
    void document.fonts.ready.then(schedule);
    fit();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, [weights, italic]);

  return (
    <div className="type-weight-list @container w-full min-w-0 text-left" ref={ref} style={{ "--weight-scale": 0.07 } as CSSProperties}>
      <div className="text-[length:calc(100cqw*var(--weight-scale))] leading-[1.2]">
        {weights.map((weight) => (
          <div className="flex w-max items-baseline gap-x-[0.3em] whitespace-nowrap" data-weight-row="" key={weight.weight}>
            <p className={`w${weight.weight}`}>{weight.name}</p>
            {italic ? <p className={`w${weight.weight}`}><em>Italic</em></p> : null}
            <p className="text-[0.55em] font-normal text-neutral-500">{weight.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
