"use client";

import type { CSSProperties } from "react";
import { useLayoutEffect, useRef, useState } from "react";

type FittedSpecimenTextProps = {
  text: string;
  typefaceClassName: string;
  variant?: "grid" | "hero";
};

export function FittedSpecimenText({
  text,
  typefaceClassName,
  variant = "grid"
}: FittedSpecimenTextProps) {
  const frameRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fitScale, setFitScale] = useState(1);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const stageNode = stageRef.current;
    const textNode = textRef.current;

    if (!stageNode || !textNode) {
      return;
    }

    const measure = () => {
      if (!stageRef.current || !textRef.current) {
        return;
      }

      const stageStyle = window.getComputedStyle(stageRef.current);
      const fitWidthRatioValue = Number.parseFloat(
        stageStyle.getPropertyValue("--sample-fit-width").trim()
      );
      const fitWidthRatio = Number.isFinite(fitWidthRatioValue) ? fitWidthRatioValue : 0.9;
      const availableWidth = stageRef.current.clientWidth * fitWidthRatio;
      const computedStyle = window.getComputedStyle(textRef.current);
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      let naturalWidth = textRef.current.scrollWidth;

      if (context) {
        context.font = computedStyle.font;

        const metrics = context.measureText(text);
        const measuredWidth = Math.max(
          metrics.width,
          Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight)
        );

        naturalWidth = Math.max(naturalWidth, measuredWidth);
      }

      if (!availableWidth || !naturalWidth) {
        return;
      }

      const nextScale = availableWidth / naturalWidth;

      setFitScale(Math.max(nextScale, 0.1));
      setIsReady(true);
    };

    const scheduleMeasure = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(measure);
    };

    scheduleMeasure();

    const resizeObserver = new ResizeObserver(() => {
      scheduleMeasure();
    });

    resizeObserver.observe(stageNode);

    document.fonts.ready.then(() => {
      scheduleMeasure();
    });

    document.fonts.addEventListener?.("loadingdone", scheduleMeasure);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      resizeObserver.disconnect();
      document.fonts.removeEventListener?.("loadingdone", scheduleMeasure);
    };
  }, [text, variant, typefaceClassName]);

  return (
    <div
      className="standardized-specimen-fit"
      data-ready={isReady ? "true" : "false"}
      data-variant={variant}
      ref={stageRef}
    >
      <h1
        className={typefaceClassName}
        ref={textRef}
        style={
          {
            "--fit-scale": fitScale
          } as CSSProperties
        }
      >
        {text}
      </h1>
    </div>
  );
}
