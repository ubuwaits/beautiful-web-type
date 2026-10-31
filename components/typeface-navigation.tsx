"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Section = { id: string; label: string };
type TypefaceNavigationProps = {
  sections: Section[];
};

export function TypefaceNavigation({ sections }: TypefaceNavigationProps) {
  const [active, setActive] = useState(sections[0].id);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = sections.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });
    let frame = 0;
    const update = () => {
      // Match the sections' scroll margin, just beneath both navigation rows.
      const line = 128;
      let current = targets[0]?.id;
      for (const target of targets) {
        if (target.element.getBoundingClientRect().top <= line + 1) current = target.id;
        else break;
      }
      if (current) setActive(current);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    const main = document.querySelector("main");
    if (main) observer.observe(main);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    document.fonts.ready.then(schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [sections]);

  useEffect(() => {
    const list = linksRef.current;
    const link = list?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!list || !link) return;
    if (link.offsetLeft < list.scrollLeft || link.offsetLeft + link.offsetWidth > list.scrollLeft + list.clientWidth) {
      list.scrollTo({ left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2 });
    }
  }, [active]);

  return (
    <nav aria-label="On this page" className="fixed inset-x-0 top-16 z-30 h-16 bg-white/95 dark:bg-neutral-950/95 font-(family-name:--ui-face) backdrop-blur-[2px]">
      <div className="relative h-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={linksRef}>
        <div className="mx-auto flex h-full w-max items-center gap-5 px-4">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className={clsx("shrink-0 py-3 text-sm leading-5 font-semibold focus-visible:outline-2 focus-visible:outline-offset-[-2px]", active === id ? "text-(--red)" : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
