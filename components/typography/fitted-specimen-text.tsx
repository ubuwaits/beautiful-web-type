"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

import { setFitScale, useTextFit } from "./use-text-fit";
import type { Typeface } from "@/lib/content";

type FittedSpecimenTextProps = {
  typeface: Pick<Typeface, "slug" | "name"> & { creator: Pick<Typeface["creator"], "name"> };
  showCreator?: boolean;
  fontFamily?: string;
  defer?: boolean;
};

export function FittedSpecimenText({ typeface, showCreator = true, fontFamily, defer = false }: FittedSpecimenTextProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const ready = !defer || activated;
  useEffect(() => {
    const stage = stageRef.current;
    if (ready || !stage) return;
    let cancelled = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        const loaded = fontFamily
          ? document.fonts.load(`400 160px ${fontFamily}`, `${typeface.name} ${typeface.creator.name}`)
          : Promise.resolve([]);
        void loaded.catch(() => []).then(() => {
          if (!cancelled) setActivated(true);
        });
      }
    }, { rootMargin: "1200px" });
    // The card's box stays measurable when content-visibility skips its contents.
    observer.observe(stage.parentElement ?? stage);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [ready, fontFamily, typeface.name, typeface.creator.name]);
  const fit = useCallback((stage: HTMLDivElement) => {
    const text = textRef.current;
    if (!text || !text.offsetWidth || !text.offsetHeight) return;
    const style = getComputedStyle(stage);
    const widthRatio = Number.parseFloat(style.getPropertyValue("--sample-fit-width"));
    const heightRatio = Number.parseFloat(style.getPropertyValue("--sample-fit-height")) || 0.65;
    setFitScale(stage, "--specimen-scale", Math.min(
      stage.clientWidth * widthRatio / text.offsetWidth,
      stage.clientHeight * heightRatio / text.offsetHeight
    ));
  }, [typeface.name, typeface.creator.name, typeface.slug, showCreator, fontFamily]);
  useTextFit(stageRef, fit, ready);

  return (
    <div className="m-0 flex h-full w-full min-w-0 max-w-none items-center justify-center overflow-hidden text-center" ref={stageRef}>
      <div
        className={`${fontFamily ? "" : typeface.slug} flex w-max shrink-0 flex-col items-center gap-[0.12em] text-center text-[10rem] font-normal not-italic leading-none`}
        data-font-preview={fontFamily ? "" : undefined}
        ref={textRef}
        style={{ "--preview-family": fontFamily, fontFamily: ready ? fontFamily : undefined, opacity: ready ? undefined : 0, transform: "scale(var(--specimen-scale, 1))" } as CSSProperties}
      >
        <h1 className="m-0 whitespace-nowrap text-[1em] font-normal not-italic leading-[1.1]">
          {typeface.name}
        </h1>
        {showCreator ? (
          <p className="m-0 whitespace-nowrap text-[0.25em] font-normal not-italic leading-[1.3] text-neutral-500 dark:text-neutral-400 transition-colors duration-200 group-hover/card:text-inherit group-focus-visible/card:text-inherit motion-reduce:transition-none max-[720px]:text-[0.32em]">
            {typeface.creator.name}
          </p>
        ) : null}
      </div>
    </div>
  );
}
