"use client";

import { useCallback, useRef } from "react";

import { setFitScale, useTextFit } from "./use-text-fit";
import type { Typeface } from "@/lib/content";

type FittedSpecimenTextProps = {
  typeface: Pick<Typeface, "slug" | "name"> & { creator: Pick<Typeface["creator"], "name"> };
  showCreator?: boolean;
};

export function FittedSpecimenText({ typeface, showCreator = true }: FittedSpecimenTextProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
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
  }, [typeface.name, typeface.creator.name, typeface.slug, showCreator]);
  useTextFit(stageRef, fit);

  return (
    <div className="standardized-specimen m-0 flex h-full w-full min-w-0 max-w-none items-center justify-center overflow-hidden text-center" ref={stageRef}>
      <div
        className={`${typeface.slug} flex w-max shrink-0 flex-col items-center gap-[0.12em] text-center text-[10rem] font-normal not-italic leading-none`}
        ref={textRef}
        style={{ transform: "scale(var(--specimen-scale, 1))" }}
      >
        <h1 className="m-0 whitespace-nowrap text-[1em] font-normal not-italic leading-[1.1]">
          {typeface.name}
        </h1>
        {showCreator ? (
          <p className="m-0 whitespace-nowrap text-[0.25em] font-normal not-italic leading-[1.3] text-neutral-500 dark:text-neutral-400 max-[720px]:text-[0.32em]">
            {typeface.creator.name}
          </p>
        ) : null}
      </div>
    </div>
  );
}
