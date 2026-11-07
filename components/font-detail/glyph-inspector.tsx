"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { loadGlyphInspectorFont, type Font, type Glyph } from "@/lib/glyph-inspector-font-loader";

type GlyphInspectorProps = {
  fontFile: string;
  typefaceName: string;
};

function formatCssEscape(unicode: number): string {
  return `\\${unicode.toString(16).toUpperCase().padStart(4, "0")}`;
}

const widestGlyphByFont = new WeakMap<Font, number>();

function widestGlyph(font: Font) {
  const cached = widestGlyphByFont.get(font);
  if (cached !== undefined) return cached;
  let widest = 0;
  for (let index = 0; index < font.numGlyphs; index++) {
    const { x1, x2 } = font.glyphs.get(index).getBoundingBox();
    widest = Math.max(widest, x2 - x1);
  }
  widestGlyphByFont.set(font, widest);
  return widest;
}

function drawGlyph(canvas: HTMLCanvasElement, font: Font, glyph: Glyph, width: number, height: number, ink: string, showGuides = false, outline = false, largerPreview = false) {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  const context = canvas.getContext("2d");
  if (!context) return;
  context.scale(ratio, ratio);

  const head = font.tables.head;
  const maxHeight = head.yMax - head.yMin;
  const maxWidth = head.xMax - head.xMin;
  const baseScale = Math.min(width / maxWidth, height / maxHeight);
  const scale = largerPreview && width > 16 && height > 28
    ? Math.max(baseScale, Math.min(baseScale * 1.4, (width - 16) / widestGlyph(font), (height - 28) / maxHeight))
    : baseScale;
  const baseline = (height - maxHeight * scale) / 2 + head.yMax * scale;
  let x = (width - glyph.advanceWidth * scale) / 2;
  if (largerPreview) {
    const { x1, x2 } = glyph.getBoundingBox();
    if (x2 > x1) x = (width - (x1 + x2) * scale) / 2;
  }
  if (showGuides) {
    const metrics = font.tables.os2;
    const guides = [
      { label: "baseline", value: 0 },
      { label: "x-height", value: metrics?.sxHeight },
      { label: "cap height", value: metrics?.sCapHeight }
    ];
    context.save();
    context.fillStyle = ink;
    context.font = `10px ${getComputedStyle(canvas).getPropertyValue("--ui-monospaced") || "monospace"}`;
    context.textBaseline = "bottom";
    for (const { label, value } of guides) {
      if (value === undefined || !Number.isFinite(value) || (label !== "baseline" && value <= 0)) continue;
      const y = baseline - value * scale;
      context.globalAlpha = 0.18;
      context.fillRect(0, y, width, 1);
      context.globalAlpha = 0.5;
      const closeToCapHeight = label === "x-height" && metrics?.sCapHeight !== undefined
        && Math.abs(metrics.sCapHeight - value) * scale < 14;
      context.textAlign = closeToCapHeight ? "right" : "left";
      context.textBaseline = closeToCapHeight ? "top" : "bottom";
      context.fillText(label, closeToCapHeight ? width : 0, y + (closeToCapHeight ? 4 : -3));
    }
    context.restore();
  }
  const path = glyph.getPath(x, baseline, scale * font.unitsPerEm);
  path.fill = outline ? null : ink;
  if (outline) {
    path.stroke = ink;
    path.strokeWidth = 1.25;

    context.save();
    context.strokeStyle = ink;
    context.lineWidth = 1;
    context.globalAlpha = 0.55;
    context.beginPath();
    let previous: { x: number; y: number } | undefined;
    for (const command of path.commands) {
      if (command.type === "Z") {
        previous = undefined;
        continue;
      }
      if (previous && (command.type === "Q" || command.type === "C")) {
        const { x, y, x1, y1 } = command;
        context.moveTo(previous.x, previous.y);
        context.lineTo(x1, y1);
        context.moveTo(x1 + 1.5, y1);
        context.arc(x1, y1, 1.5, 0, Math.PI * 2);
        if (command.type === "Q") {
          context.moveTo(x, y);
          context.lineTo(x1, y1);
        } else {
          context.moveTo(x, y);
          context.lineTo(command.x2, command.y2);
          context.moveTo(command.x2 + 1.5, command.y2);
          context.arc(command.x2, command.y2, 1.5, 0, Math.PI * 2);
        }
      }
      previous = command;
    }
    context.stroke();
    context.restore();
  }
  path.draw(context);
  if (outline) {
    context.beginPath();
    for (const command of path.commands) {
      if (command.type !== "Z") {
        context.rect(command.x - 2, command.y - 2, 4, 4);
      }
    }
    context.lineWidth = 1;
    context.stroke();
  }
  return baseline;
}

function CopyValue({ label, value }: { label: string; value: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Button
        className="size-7 min-h-0! shrink-0 rounded-sm bg-transparent! p-0!"
        onClick={copy} aria-label={`Copy ${label.toLowerCase()}`} title={status === "copied" ? "Copied" : `Copy ${label.toLowerCase()}`}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
          {status === "copied" ? <path d="m3 8 3 3 7-7" /> : <><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" /><path d="M10.5 3.5v-1A1 1 0 0 0 9.5 1.5h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1" /></>}
        </svg>
      </Button>
      <span className="sr-only left-0 top-0" role="status">{status === "copied" ? `${label} copied` : status === "error" ? "Could not copy. Select and copy the value manually." : ""}</span>
    </>
  );
}

function initialGlyphIndex(font: Font) {
  const value = Number(new URL(window.location.href).searchParams.get("i") ?? 5);
  return Math.max(0, Math.min(font.numGlyphs - 1, Number.isInteger(value) ? value : 5));
}

export function GlyphInspector({ fontFile, typefaceName }: GlyphInspectorProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const initialAnchorRef = useRef(false);
  const detailCanvasRef = useRef<HTMLCanvasElement>(null);
  const infoTableRef = useRef<HTMLTableElement>(null);
  const infoBaselineRef = useRef<HTMLSpanElement>(null);
  const glyphGridRef = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [font, setFont] = useState<Font | null>(null);
  const [selectedGlyph, setSelectedGlyph] = useState<Glyph | null>(null);
  const [outline, setOutline] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    initialAnchorRef.current = window.location.hash === "#glyphs";
    if (initialAnchorRef.current) setActivated(true);
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setActivated(true);
        observer.disconnect();
      }
    }, { rootMargin: "600px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, [fontFile]);

  useEffect(() => {
    if (!scriptReady) return;
    let cancelled = false;
    setFont(null);
    setSelectedGlyph(null);
    setError(false);
    void loadGlyphInspectorFont(fontFile).then((loadedFont) => {
      if (cancelled) return;
      setFont(loadedFont);
      setSelectedGlyph(loadedFont.glyphs.get(initialGlyphIndex(loadedFont)));
    }).catch((cause) => {
      if (!cancelled) {
        console.error("Font could not be loaded", cause);
        setError(true);
      }
    });
    return () => { cancelled = true; };
  }, [fontFile, scriptReady]);

  useEffect(() => {
    const canvas = detailCanvasRef.current;
    const parent = canvas?.parentElement;
    if (!font || !selectedGlyph || !canvas || !parent) return;
    const draw = () => {
      const width = parent.clientWidth;
      const largerPreview = window.matchMedia("(min-width: 1105px)").matches;
      const baseline = drawGlyph(canvas, font, selectedGlyph, width, width * 0.8, getComputedStyle(canvas).color, true, outline, largerPreview);
      const table = infoTableRef.current;
      const marker = infoBaselineRef.current;
      if (table && marker && baseline !== undefined) {
        const textBaseline = marker.getBoundingClientRect().top - table.getBoundingClientRect().top;
        table.style.setProperty("--glyph-info-offset", `${Math.max(0, baseline - textBaseline)}px`);
        parent.style.setProperty("--glyph-preview-offset", `${Math.max(0, textBaseline - baseline)}px`);
      }
    };
    const observer = new ResizeObserver(draw);
    observer.observe(parent);
    if (infoTableRef.current) observer.observe(infoTableRef.current);
    const themeObserver = new MutationObserver(draw);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    draw();
    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, [font, selectedGlyph, outline]);

  useEffect(() => {
    const grid = glyphGridRef.current;
    if (!font || !grid) return;
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < font.numGlyphs; index++) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "glyph-container relative aspect-square min-w-0 cursor-pointer border-0 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-neutral-100 p-0 hover:bg-neutral-100 dark:hover:bg-neutral-900 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-neutral-500 data-[selected=true]:bg-neutral-200 dark:data-[selected=true]:bg-neutral-800";
      button.dataset.glyphIndex = String(index);
      button.setAttribute("aria-label", `Select glyph ${index}`);
      button.setAttribute("aria-pressed", "false");
      fragment.appendChild(button);
    }
    grid.replaceChildren(fragment);
    // Specimen fitting can shift a deep link before the grid has loaded. Once its
    // real height is known, align the requested viewer rather than its placeholder.
    const anchorFrame = initialAnchorRef.current ? requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ block: "start" });
      initialAnchorRef.current = false;
    }) : 0;

    // All cells share a width. Measure once per resize, before any canvas writes;
    // reading clientWidth for each cell forces a layout after every preceding draw.
    let cellWidth = (grid.firstElementChild as HTMLElement).clientWidth;
    let ink = getComputedStyle(grid).color;
    let drawKey = `${cellWidth}:${window.devicePixelRatio}:${ink}`;
    const nearby = new Set<HTMLElement>();
    const drawCell = (button: HTMLElement) => {
      const width = cellWidth;
      const key = drawKey;
      if (button.dataset.drawnAt === key) return;
      const glyph = font.glyphs.get(Number(button.dataset.glyphIndex));
      const canvas = button.querySelector("canvas") ?? document.createElement("canvas");
      canvas.className = "pointer-events-none block h-full w-full";
      canvas.setAttribute("aria-hidden", "true");
      drawGlyph(canvas, font, glyph, width, width, ink);
      button.appendChild(canvas);
      button.dataset.drawnAt = key;
      button.setAttribute("aria-label", `Select glyph ${glyph.index}${glyph.name ? `: ${glyph.name}` : ""}`);
    };
    const visibilityObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const button = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          nearby.add(button);
          drawCell(button);
        } else {
          nearby.delete(button);
          const canvas = button.querySelector("canvas");
          if (canvas) {
            // Release the pixel buffer immediately, including in Safari.
            canvas.width = 0;
            canvas.height = 0;
            canvas.remove();
            delete button.dataset.drawnAt;
          }
        }
      }
    }, { rootMargin: `${Math.max(1200, window.innerHeight * 2)}px` });
    Array.from(grid.children).forEach((button) => visibilityObserver.observe(button));
    const resizeObserver = new ResizeObserver(() => {
      cellWidth = (grid.firstElementChild as HTMLElement).clientWidth;
      drawKey = `${cellWidth}:${window.devicePixelRatio}:${ink}`;
      nearby.forEach(drawCell);
    });
    resizeObserver.observe(grid);
    const themeObserver = new MutationObserver(() => {
      ink = getComputedStyle(grid).color;
      drawKey = `${cellWidth}:${window.devicePixelRatio}:${ink}`;
      nearby.forEach(drawCell);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const select = (event: Event) => {
      const button = (event.target as HTMLElement).closest<HTMLElement>("[data-glyph-index]");
      if (!button) return;
      const index = Number(button.dataset.glyphIndex);
      setSelectedGlyph(font.glyphs.get(index));
      if (event.type === "click") {
        const url = new URL(window.location.href);
        url.searchParams.set("i", String(index));
        url.hash = "glyphs";
        window.history.replaceState(window.history.state, "", url);
      }
    };
    grid.addEventListener("click", select);
    grid.addEventListener("focusin", select);

    return () => {
      cancelAnimationFrame(anchorFrame);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      grid.removeEventListener("click", select);
      grid.removeEventListener("focusin", select);
      grid.replaceChildren();
    };
  }, [font]);

  useEffect(() => {
    const grid = glyphGridRef.current;
    if (!grid || !selectedGlyph) return;
    const previous = grid.querySelector<HTMLElement>("[data-selected=true]");
    previous?.removeAttribute("data-selected");
    previous?.setAttribute("aria-pressed", "false");
    const selected = grid.querySelector<HTMLElement>(`[data-glyph-index="${selectedGlyph.index}"]`);
    selected?.setAttribute("data-selected", "true");
    selected?.setAttribute("aria-pressed", "true");
  }, [font, selectedGlyph]);

  const codes = selectedGlyph?.unicodes ?? [];
  const details = [
    { label: "Glyph name", value: selectedGlyph?.name, unavailable: "Not available" },
    { label: "Unicode", value: codes.map((code) => `U+${code.toString(16).toUpperCase().padStart(4, "0")}`).join(", "), unavailable: "Not encoded" },
    { label: "HTML entity", value: codes.map((code) => `&#${code};`).join(", "), unavailable: "Not available" },
    { label: "CSS escape", value: codes.map(formatCssEscape).join(", "), unavailable: "Not available" }
  ];
  return (
    <section className="mb-(--section-gap) scroll-mt-20" id="glyphs" ref={sectionRef} aria-label={`${typefaceName} glyph explorer`}>
      {activated ? <Script src="/js/opentype.min.js" strategy="afterInteractive" onReady={() => setScriptReady(true)} onError={() => setError(true)} /> : null}
      <p className="sr-only" role="status">{error ? "Could not load glyphs" : font ? "Glyphs ready" : "Loading glyphs…"}</p>
      <noscript><p className="mb-4">Enable JavaScript to explore the glyphs.</p></noscript>
      {error ? <p role="alert">The font could not be loaded. Reload the page to try again.</p> : null}
      <div className="grid grid-cols-1 items-start gap-(--gutter) min-[721px]:grid-cols-12">
        <div className="sticky top-16 z-10 grid max-h-[calc(100dvh-6rem)] min-[721px]:top-20 min-[721px]:max-h-[calc(100dvh-7rem)] grid-cols-2 items-start gap-x-4 min-[721px]:gap-x-0 overflow-y-auto bg-white/95 backdrop-blur-[2px] dark:bg-neutral-950/95 min-[721px]:bg-white min-[721px]:backdrop-blur-none min-[721px]:dark:bg-neutral-950 min-[721px]:col-span-3 min-[721px]:block" id="glyph-detail">
          <button
            type="button"
            className="block w-full min-w-0 cursor-pointer pt-(--glyph-preview-offset) focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-500 disabled:cursor-default min-[721px]:pt-0"
            aria-label="Glyph outline"
            aria-pressed={outline}
            title={outline ? "Show filled glyph" : "Show glyph outline"}
            disabled={!selectedGlyph}
            onClick={() => setOutline((current) => !current)}
          >
            <canvas className="block h-auto w-full" id="glyph-detail-canvas" ref={detailCanvasRef} aria-label={selectedGlyph ? `Preview of glyph ${selectedGlyph.index}` : "Selected glyph preview"} />
          </button>
          <table className="w-full min-w-0 self-start translate-y-(--glyph-info-offset) min-[721px]:translate-y-0 table-fixed border-collapse [&_tr:first-child>*]:pt-0 [&_tr:last-child>*]:pb-0 text-xs leading-6 min-[721px]:text-sm" id="glyph-info" ref={infoTableRef}>
            <caption className="sr-only">Selected glyph details</caption>
            <tbody>
              {details.map(({ label, value, unavailable }) => (
                <tr className="border-neutral-200/60 min-[721px]:border-t first:border-t-0 dark:border-neutral-800/80" key={label}>
                  <th scope="row" className="w-2/5 py-0 min-[721px]:py-3 pr-2 text-left align-top font-(family-name:--ui-face) font-semibold uppercase">{label}</th>
                  <td className="py-0 min-[721px]:py-3 text-right align-top font-(family-name:--ui-monospaced)">
                    <div className="relative flex min-w-0 items-start justify-end gap-1">
                      <span className="min-w-0 truncate" title={value || unavailable}>{value || unavailable}{label === "CSS escape" ? <span className="inline-block size-0 align-baseline" ref={infoBaselineRef} aria-hidden="true" /> : null}</span>
                      {value ? <CopyValue key={`${label}:${value}`} label={label} value={value} /> : <span className="size-7 shrink-0" aria-hidden="true" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="min-w-0 min-[721px]:col-span-9" id="glyph-grid-container" aria-busy={!font && !error}>
          <div className="grid grid-cols-6 bg-white dark:bg-neutral-950 min-[721px]:grid-cols-10 min-[1105px]:grid-cols-16" id="glyph-grid" ref={glyphGridRef} data-glyph-count={font?.numGlyphs} />
        </div>
      </div>
    </section>
  );
}
