"use client";

import { useCallback, useRef } from "react";

import { setFitScale, useTextFit } from "./use-text-fit";
import type { Typeface } from "@/lib/content";

export function FittedSpecimenText({ typeface }: { typeface: Pick<Typeface, "slug" | "name"> }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const fit = useCallback((stage: HTMLDivElement) => {
    const text = textRef.current;
    if (!text || !text.offsetWidth || !text.offsetHeight) return;
    const style = getComputedStyle(stage);
    const widthRatio = Number.parseFloat(style.getPropertyValue("--sample-fit-width"));
    const heightRatio = Number.parseFloat(style.getPropertyValue("--sample-fit-height")) || 0.65;
    const scale = Math.min(
      stage.clientWidth * widthRatio / text.offsetWidth,
      Math.max(1, stage.clientHeight * heightRatio) / text.offsetHeight
    );
    setFitScale(stage, "--specimen-scale", scale);
  }, [typeface.name, typeface.slug]);
  useTextFit(stageRef, fit);

  return (
    <div className="@container m-0 flex h-full w-full min-w-0 max-w-none items-center justify-center overflow-hidden text-center" ref={stageRef}>
      <div className="relative flex h-full w-full min-w-0 flex-col items-center justify-center">
        <div className="flex h-[calc(11rem*var(--specimen-scale,1))] w-full items-center justify-center">
          <div
            className={`${typeface.slug} w-max shrink-0 text-[10rem] font-normal not-italic leading-none`}
            ref={textRef}
            style={{ transform: "scale(var(--specimen-scale, 1))" }}
          >
            <h1 className="m-0 whitespace-nowrap text-[1em] font-normal not-italic leading-[1.1]">
              {typeface.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
