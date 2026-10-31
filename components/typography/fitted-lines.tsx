"use client";

import { useCallback, useRef, type CSSProperties, type ReactNode } from "react";

import { setFitScale, useTextFit } from "./use-text-fit";

type FittedLineProps = {
  text: string;
  className?: string;
  lines?: 1 | 2;
  weight?: number;
};

function splitHeadline(text: string): string {
  const words = text.trim().split(/\s+/);
  if (words.length < 2) return text;
  let split = 1;
  let difference = Infinity;
  for (let index = 1; index < words.length; index++) {
    const delta = Math.abs(words.slice(0, index).join(" ").length - words.slice(index).join(" ").length);
    if (delta < difference) {
      split = index;
      difference = delta;
    }
  }
  return `${words.slice(0, split).join(" ")}\n${words.slice(split).join(" ")}`;
}

export function FittedLine({ text, className = "", lines = 1, weight = 400 }: FittedLineProps) {
  return (
    <div className="@container min-w-0 w-full">
      <h1
        className={`m-0 w-max max-w-none ${lines === 2 ? "whitespace-pre" : "whitespace-nowrap"} leading-[1.15] caret-(--red) outline-none ${className}`}
        style={{ "--line-scale": 0.9 / Math.max(1, text.length / lines), fontSize: "calc(100cqw * var(--line-scale))", fontWeight: weight } as CSSProperties}
        data-fit-line=""
        data-fit-lines={lines}
        onKeyDown={(event) => { if (event.key === "Enter") event.preventDefault(); }}
        onBlur={lines === 2 ? (event) => {
          event.currentTarget.textContent = splitHeadline(event.currentTarget.innerText);
          event.currentTarget.dispatchEvent(new Event("input", { bubbles: true }));
        } : undefined}
        contentEditable="plaintext-only"
        suppressContentEditableWarning
      >
        {lines === 2 ? splitHeadline(text) : text}
      </h1>
    </div>
  );
}

/** CSS container units provide continuous sizing; measurements calibrate each font and style. */
export function FittedLines({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const fit = useCallback((root: HTMLDivElement) => {
    const lines = Array.from(root.querySelectorAll<HTMLElement>("[data-fit-line]"));
    // Read every line before changing styles to avoid repeated synchronous layouts.
    const scales = lines.map((line) => {
      const width = line.getBoundingClientRect().width;
      const size = parseFloat(getComputedStyle(line).fontSize);
      return width > 0 ? size / width * 0.98 : null;
    });
    lines.forEach((line, index) => {
      const scale = scales[index];
      if (scale !== null) setFitScale(line, "--line-scale", scale);
      line.dataset.fitReady = "true";
    });
  }, [children]);
  useTextFit(ref, fit);

  return <div className={className} ref={ref}>{children}</div>;
}
