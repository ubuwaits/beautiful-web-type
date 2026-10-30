"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MasonryProps = {
  children: ReactNode;
  className?: string;
};

/** Content-sized cards, placed in the shortest column without changing DOM order. */
export function Masonry({ children, className = "" }: MasonryProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Trusted font specimens use a display:contents wrapper, so include its children.
    const items = Array.from(container.children).flatMap((child) =>
      child.classList.contains("contents") ? Array.from(child.children) : [child]
    ).filter((child): child is HTMLElement => child instanceof HTMLElement);
    let frame = 0;
    let disposed = false;

    function layout() {
      if (!container || disposed) return;
      const columns = window.matchMedia("(min-width: 1105px)").matches ? 2 : 1;
      if (columns === 1) {
        for (const item of items) {
          for (const property of ["position", "width", "left", "top"]) item.style.removeProperty(property);
        }
        container.style.removeProperty("height");
        container.dataset.masonryReady = "true";
        return;
      }

      const gap = parseFloat(getComputedStyle(container).columnGap);
      const width = (container.clientWidth - gap) / columns;
      // Set all widths before reading heights: font loading, editing and resizing can change them.
      for (const item of items) item.style.width = `${width}px`;
      const heights = items.map((item) => item.getBoundingClientRect().height);
      const bottoms = [0, 0];
      items.forEach((item, index) => {
        const column = bottoms[0] <= bottoms[1] ? 0 : 1;
        Object.assign(item.style, {
          position: "absolute",
          left: `${column * (width + gap)}px`,
          top: `${bottoms[column]}px`
        });
        bottoms[column] += heights[index] + gap;
      });
      container.style.height = `${Math.max(0, ...bottoms) - (items.length ? gap : 0)}px`;
      container.dataset.masonryReady = "true";
    }

    function schedule() {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(layout);
    }

    const observer = new ResizeObserver(schedule);
    observer.observe(container);
    items.forEach((item) => observer.observe(item));
    document.fonts.addEventListener("loadingdone", schedule);
    void document.fonts.ready.then(schedule);
    layout();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, [children]);

  return (
    <div
      className={`relative grid grid-cols-1 items-start gap-(--gutter) min-[1105px]:grid-cols-2 [&>div]:min-w-0 [&>.contents>div]:min-w-0 ${className}`}
      data-masonry=""
      ref={ref}
    >
      {children}
    </div>
  );
}
