"use client";

import { useLayoutEffect, type RefObject } from "react";

/** Recalibrate fitted text after layout, font loading, or text edits. */
export function useTextFit(ref: RefObject<HTMLDivElement | null>, measure: (root: HTMLDivElement) => void) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    let frame = 0;
    let disposed = false;
    const fit = () => {
      if (!disposed) measure(root);
    };
    const schedule = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    root.addEventListener("input", schedule);
    document.fonts.addEventListener("loadingdone", schedule);
    void document.fonts.ready.then(schedule);
    fit();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.removeEventListener("input", schedule);
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, [ref, measure]);
}

export function setFitScale(element: HTMLElement, property: string, scale: number) {
  if (!Number.isFinite(scale) || scale <= 0) return;
  const previous = Number.parseFloat(element.style.getPropertyValue(property));
  if (!Number.isFinite(previous) || Math.abs(scale - previous) > 0.000001) {
    element.style.setProperty(property, String(scale));
  }
}
