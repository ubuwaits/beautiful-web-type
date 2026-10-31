"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

import { loadGlyphInspectorFont, type Font, type Glyph } from "@/lib/glyph-inspector-font-loader";

type GlyphInspectorProps = {
  fontFile: string;
  typefaceName: string;
};

function formatCssCode(unicode: number): string {
  return `content: '\\${unicode.toString(16).toUpperCase().padStart(4, "0")}';`;
}

function drawGlyph(canvas: HTMLCanvasElement, font: Font, glyph: Glyph, width: number, height: number, ink: string, showBaseline = false) {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  const context = canvas.getContext("2d");
  if (!context) return;
  context.scale(ratio, ratio);

  const head = font.tables.head;
  const maxHeight = head.yMax - head.yMin;
  const maxWidth = head.xMax - head.xMin;
  const scale = Math.min(width / maxWidth, height / maxHeight);
  const baseline = (height - maxHeight * scale) / 2 + head.yMax * scale;
  const x = (width - glyph.advanceWidth * scale) / 2;
  if (showBaseline) {
    context.fillStyle = ink;
    context.globalAlpha = 0.25;
    context.fillRect(16, baseline, Math.max(0, width - 32), 1);
    context.globalAlpha = 1;
  }
  const path = glyph.getPath(x, baseline, scale * font.unitsPerEm);
  path.fill = ink;
  path.draw(context);
}

function initialGlyphIndex(font: Font) {
  const value = Number(new URL(window.location.href).searchParams.get("i") ?? 5);
  return Math.max(0, Math.min(font.numGlyphs - 1, Number.isInteger(value) ? value : 5));
}

export function GlyphInspector({ fontFile, typefaceName }: GlyphInspectorProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const initialAnchorRef = useRef(false);
  const detailCanvasRef = useRef<HTMLCanvasElement>(null);
  const glyphGridRef = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [font, setFont] = useState<Font | null>(null);
  const [selectedGlyph, setSelectedGlyph] = useState<Glyph | null>(null);
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
      drawGlyph(canvas, font, selectedGlyph, width, width * 0.8, getComputedStyle(canvas).color, true);
    };
    const observer = new ResizeObserver(draw);
    observer.observe(parent);
    const themeObserver = new MutationObserver(draw);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    draw();
    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, [font, selectedGlyph]);

  useEffect(() => {
    const grid = glyphGridRef.current;
    if (!font || !grid) return;
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < font.numGlyphs; index++) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "glyph-container relative aspect-square min-w-0 cursor-pointer border-0 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-neutral-100 p-0 hover:bg-neutral-100 dark:hover:bg-neutral-900 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-(--red) data-[selected=true]:bg-neutral-200 dark:data-[selected=true]:bg-neutral-800";
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
  return (
    <section className="mb-(--section-gap) scroll-mt-32" id="glyphs" ref={sectionRef} aria-label={`${typefaceName} glyph explorer`}>
      {activated ? <Script src="/js/opentype.min.js" strategy="afterInteractive" onReady={() => setScriptReady(true)} onError={() => setError(true)} /> : null}
      <p className="sr-only" role="status">{error ? "Could not load glyphs" : font ? "Glyphs ready" : "Loading glyphs…"}</p>
      <noscript><p className="mb-4">Enable JavaScript to explore the glyphs.</p></noscript>
      {error ? <p role="alert">The font could not be loaded. Reload the page to try again.</p> : null}
      <div className="grid grid-cols-1 items-start gap-(--gutter) min-[721px]:grid-cols-12">
        <div className="sticky top-32 z-10 grid max-h-[calc(100dvh-10rem)] grid-cols-2 items-start overflow-y-auto bg-white dark:bg-neutral-950 min-[721px]:col-span-3 min-[721px]:block" id="glyph-detail">
          <div className="min-w-0">
            <canvas className="block h-auto w-full" id="glyph-detail-canvas" ref={detailCanvasRef} aria-label={selectedGlyph ? `Preview of glyph ${selectedGlyph.index}` : "Selected glyph preview"} />
          </div>
          <dl className="m-0 min-w-0 font-(family-name:--ui-monospaced) text-base leading-6 wrap-anywhere [&>dt]:leading-4 [&>dt]:font-(family-name:--ui-face) [&>dt]:font-bold [&>dt]:uppercase [&>dd]:m-0 [&>dd]:mb-3" id="glyph-info">
            <dt>Glyph name</dt><dd>{selectedGlyph?.name ?? "Not available"}</dd>
            <dt>Unicode</dt><dd>{codes.map((code) => `U+${code.toString(16).toUpperCase().padStart(4, "0")}`).join(", ") || "Not encoded"}</dd>
            <dt>HTML code</dt><dd>{codes.map((code) => `&#${code};`).join(", ") || "Not available"}</dd>
            <dt>CSS code</dt><dd>{codes.map(formatCssCode).join(", ") || "Not available"}</dd>
          </dl>
        </div>
        <div className="min-w-0 min-[721px]:col-span-9" id="glyph-grid-container" aria-busy={!font && !error}>
          <div className="grid grid-cols-6 bg-white dark:bg-neutral-950 min-[721px]:grid-cols-10 min-[1105px]:grid-cols-16" id="glyph-grid" ref={glyphGridRef} data-glyph-count={font?.numGlyphs} />
        </div>
      </div>
    </section>
  );
}
