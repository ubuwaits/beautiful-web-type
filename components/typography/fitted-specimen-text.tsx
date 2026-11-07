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
  const captionRef = useRef<HTMLParagraphElement>(null);
  const [fontSettled, setFontSettled] = useState(false);
  const ready = !fontFamily || fontSettled;
  useEffect(() => {
    const stage = stageRef.current;
    if (!fontFamily || ready || !stage) return;
    let cancelled = false;
    const load = () => {
      void document.fonts.load(`400 160px ${fontFamily}`, typeface.name).catch(() => []).then(() => {
        if (!cancelled) setFontSettled(true);
      });
    };
    if (!defer) {
      load();
      return () => { cancelled = true; };
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        load();
      }
    }, { rootMargin: "1200px" });
    // The card's box stays measurable when content-visibility skips its contents.
    observer.observe(stage.parentElement ?? stage);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [ready, defer, fontFamily, typeface.name]);
  const fit = useCallback((stage: HTMLDivElement) => {
    const text = textRef.current;
    if (!text || !text.offsetWidth || !text.offsetHeight) return;
    const style = getComputedStyle(stage);
    const widthRatio = Number.parseFloat(style.getPropertyValue("--sample-fit-width"));
    const heightRatio = Number.parseFloat(style.getPropertyValue("--sample-fit-height")) || 0.65;
    const caption = captionRef.current;
    const captionHeight = caption?.offsetHeight ?? 0;
    const scale = Math.min(
      stage.clientWidth * widthRatio / text.offsetWidth,
      Math.max(1, stage.clientHeight * heightRatio - captionHeight) / text.offsetHeight
    );
    if (!Number.isFinite(scale) || scale <= 0) return;
    setFitScale(stage, "--specimen-scale", scale);
    if (fontFamily) stage.style.setProperty("--specimen-title-opacity", "1");
  }, [typeface.name, typeface.creator.name, typeface.slug, showCreator, fontFamily]);
  useTextFit(stageRef, fit, ready);

  return (
    <div className="@container m-0 flex h-full w-full min-w-0 max-w-none items-center justify-center overflow-hidden text-center" ref={stageRef}>
      <div className="relative flex h-full w-full min-w-0 flex-col items-center justify-center">
        <div className={showCreator
          ? "absolute inset-x-0 bottom-[40%] flex h-0 items-end justify-center min-[721px]:bottom-[35%]"
          : "flex h-[calc(11rem*var(--specimen-scale,1))] w-full items-center justify-center"}>
          <div
            className={`${fontFamily ? "" : typeface.slug} w-max shrink-0 text-[10rem] font-normal not-italic leading-none`}
            ref={textRef}
            data-font-preview={fontFamily ? "" : undefined}
            style={{
              "--preview-family": fontFamily,
              fontFamily: ready ? fontFamily : undefined,
              opacity: fontFamily ? "var(--specimen-title-opacity, 0)" : undefined,
              transform: "scale(var(--specimen-scale, 1))",
              transformOrigin: showCreator ? "center bottom" : undefined
            } as CSSProperties}
          >
            <h1 className={`m-0 whitespace-nowrap text-[1em] font-normal not-italic leading-[1.1] ${showCreator ? "[text-box-trim:trim-end] [text-box-edge:cap_alphabetic]" : ""}`}>
              {typeface.name}
            </h1>
          </div>
        </div>
        {showCreator ? (
          <p ref={captionRef} className="absolute inset-x-0 bottom-2 m-0 max-w-full px-2 font-(family-name:--ui-face) text-xs max-[720px]:@min-[21rem]:text-sm min-[721px]:text-lg leading-6 font-normal not-italic text-neutral-500 dark:text-neutral-400 transition-colors duration-200 group-hover/card:text-inherit group-focus-visible/card:text-inherit motion-reduce:transition-none min-[721px]:bottom-4">
            {typeface.creator.name}
          </p>
        ) : null}
      </div>
    </div>
  );
}
