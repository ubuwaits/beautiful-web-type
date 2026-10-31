"use client";

import { useLayoutEffect, useRef, useState } from "react";

import type { Typeface } from "@/lib/content";

type FittedSpecimenTextProps = {
  typeface: Pick<Typeface, "slug" | "name" | "creator">;
  variant: "grid" | "hero";
};

export function FittedSpecimenText({ typeface, variant }: FittedSpecimenTextProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const text = textRef.current;
    if (!stage || !text) return;

    let frame = 0;
    const measure = () => {
      const widthRatio = Number.parseFloat(getComputedStyle(stage).getPropertyValue("--sample-fit-width"));
      setScale(Math.min(
        stage.clientWidth * widthRatio / text.offsetWidth,
        stage.clientHeight * 0.65 / text.offsetHeight
      ));
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(stage);
    document.fonts.ready.then(schedule);
    document.fonts.addEventListener("loadingdone", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, [typeface.name, typeface.creator.name, typeface.slug]);

  return (
    <div className="text standardized-specimen overflow-hidden" ref={stageRef}>
      <div
        className={`${typeface.slug} flex w-max shrink-0 flex-col items-center gap-[0.12em] text-center text-[10rem] font-normal not-italic leading-none`}
        ref={textRef}
        style={{ transform: `scale(${scale})` }}
      >
        <h1 className="m-0 whitespace-nowrap text-[1em] font-normal not-italic leading-[1.1]">
          {typeface.name}
        </h1>
        <p className={`m-0 whitespace-nowrap text-[0.25em] font-normal not-italic leading-[1.3] ${variant === "hero" ? "text-neutral-400" : "text-neutral-500"}`}>
          {typeface.creator.name}
        </p>
      </div>
    </div>
  );
}
