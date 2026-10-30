"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

type FittedLineProps = {
  text: string;
  className?: string;
};

export function FittedLine({ text, className = "" }: FittedLineProps) {
  return (
    <div className="@container min-w-0 w-full">
      <h1
        className={`m-0 w-max max-w-none whitespace-nowrap leading-[1.15] ${className}`}
        style={{ "--line-scale": 0.9 / Math.max(1, text.length), fontSize: "calc(100cqw * var(--line-scale))" } as CSSProperties}
        data-fit-line=""
        contentEditable="plaintext-only"
        suppressContentEditableWarning
      >
        {text}
      </h1>
    </div>
  );
}

/** CSS container units provide continuous sizing; measurements calibrate each font and style. */
export function FittedLines({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const lines = Array.from(root.querySelectorAll<HTMLElement>("[data-fit-line]"));
    let frame = 0;
    let disposed = false;
    const fit = () => {
      if (disposed) return;
      // Read every line before changing any styles to avoid repeated synchronous layouts.
      const scales = lines.map((line) => {
        const width = line.getBoundingClientRect().width;
        const size = parseFloat(getComputedStyle(line).fontSize);
        return width > 0 ? size / width * 0.98 : null;
      });
      lines.forEach((line, index) => {
        const scale = scales[index];
        const previous = parseFloat(line.style.getPropertyValue("--line-scale"));
        if (scale !== null && Math.abs(scale - previous) > 0.000001) {
          line.style.setProperty("--line-scale", String(scale));
        }
        line.dataset.fitReady = "true";
      });
    };
    const schedule = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };
    const preventNewline = (event: KeyboardEvent) => {
      if (event.key === "Enter" && (event.target as HTMLElement).matches("[data-fit-line]")) event.preventDefault();
    };
    const observer = new ResizeObserver(schedule);
    lines.forEach((line) => observer.observe(line.parentElement!));
    root.addEventListener("input", schedule);
    root.addEventListener("keydown", preventNewline);
    document.fonts.addEventListener("loadingdone", schedule);
    void document.fonts.ready.then(schedule);
    fit();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.removeEventListener("input", schedule);
      root.removeEventListener("keydown", preventNewline);
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, [children]);

  return <div className={className} ref={ref}>{children}</div>;
}
