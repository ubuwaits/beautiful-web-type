"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type GlyphInspectorProps = {
  fontClassName: string;
  fontFile: string;
  typefaceName: string;
  typefacePath: string;
};

type Glyph = {
  index: number;
  unicode?: number;
  unicodes: number[];
  name?: string;
  advanceWidth: number;
  draw: (
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    fontSize: number
  ) => void;
};

type Font = {
  numGlyphs: number;
  unitsPerEm: number;
  glyphs: {
    get: (glyphIndex: number) => Glyph;
  };
  tables: {
    head: {
      xMax: number;
      xMin: number;
      yMax: number;
      yMin: number;
    };
  };
};

declare global {
  interface Window {
    opentype?: {
      load: (fontFile: string, callback: (error: Error | null, font?: Font) => void) => void;
    };
  }
}

function formatCssCode(unicode: number): string {
  const hexUnicode = unicode.toString(16);

  return `content: '\\${`0000${hexUnicode.toUpperCase()}`.slice(-4)}';`;
}

function formatHtmlCode(unicode: number): string {
  return `&#${unicode};`;
}

function getPixelRatio(): number {
  return window.devicePixelRatio || 1;
}

function enableHighDpiCanvas(canvas: HTMLCanvasElement) {
  const pixelRatio = getPixelRatio();

  if (pixelRatio === 1) {
    return;
  }

  const oldWidth = canvas.width;
  const oldHeight = canvas.height;
  canvas.width = oldWidth * pixelRatio;
  canvas.height = oldHeight * pixelRatio;
  canvas.style.width = `${oldWidth}px`;
  canvas.style.height = `${oldHeight}px`;

  const context = canvas.getContext("2d");
  context?.scale(pixelRatio, pixelRatio);
}

function getColumnCount(): number {
  if (window.innerWidth > 940) {
    return 16;
  }

  if (window.innerWidth > 700) {
    return 10;
  }

  return 6;
}

function getGlyphsPerPage(): number {
  if (window.innerWidth > 940) {
    return 128;
  }

  if (window.innerWidth > 700) {
    return 130;
  }

  return 54;
}

function getGlyphPosition(font: Font, canvas: HTMLCanvasElement, glyph: Glyph) {
  const pixelRatio = getPixelRatio();
  const width = canvas.width / pixelRatio;
  const height = canvas.height / pixelRatio;
  const maxHeight = font.tables.head.yMax - font.tables.head.yMin;
  const maxWidth = font.tables.head.xMax - font.tables.head.xMin;
  const fontScale = Math.min(width / maxWidth, height / maxHeight);
  const fontSize = fontScale * font.unitsPerEm;
  const fontBaseline = (height * font.tables.head.yMax) / maxHeight;
  const glyphWidth = glyph.advanceWidth * fontScale;
  const xMin = (width - glyphWidth) / 2;

  return { xMin, fontBaseline, fontSize };
}

export function GlyphInspector({
  fontClassName,
  fontFile,
  typefaceName,
  typefacePath
}: GlyphInspectorProps) {
  const detailCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const glyphInfoRef = useRef<HTMLDivElement | null>(null);
  const glyphGridRef = useRef<HTMLDivElement | null>(null);
  const glyphPaginationRef = useRef<HTMLDivElement | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!scriptReady || !window.opentype) {
      return;
    }

    const detailCanvas = detailCanvasRef.current;
    const glyphInfo = glyphInfoRef.current;
    const glyphGrid = glyphGridRef.current;
    const glyphPagination = glyphPaginationRef.current;

    if (!detailCanvas || !glyphInfo || !glyphGrid || !glyphPagination) {
      return;
    }

    window.opentype.load(fontFile, (error, font) => {
      if (error || !font) {
        console.error(`Font could not be loaded: ${error}`);
        return;
      }

      const removeClass = (className: string) => {
        const nodes = Array.from(document.getElementsByClassName(className));
        nodes.forEach((node) => node.classList.remove(className));
      };

      const highlightSelectedGlyph = (glyphIndex: number) => {
        removeClass("active");
        document.getElementById(`g${glyphIndex}`)?.parentElement?.classList.add("active");
      };

      const displaySelectedGlyphInfo = (glyph: Glyph) => {
        const glyphValue = glyph.unicode ?? glyph.unicodes[0];
        const glyphMarkup =
          glyphValue === undefined ? "Undefined" : `&#${glyphValue};`;

        glyphInfo.innerHTML = `
          <h3>Glyph</h3>
          <p class="${fontClassName}">${glyphMarkup}</p>

          <h3>Glyph Name</h3>
          <p>${glyph.name ?? "Not available"}</p>

          <h3>HTML Code</h3>
          <p>${glyph.unicodes.map(formatHtmlCode).join(", ") || "Not available"}</p>

          <h3>CSS Code</h3>
          <p>${glyph.unicodes.map(formatCssCode).join(", ") || "Not available"}</p>
        `;
      };

      const displaySelectedGlyph = (glyph: Glyph) => {
        displaySelectedGlyphInfo(glyph);
        highlightSelectedGlyph(glyph.index);
        window.history.replaceState({}, document.title, `?i=${glyph.index}`);

        detailCanvas.width = detailCanvas.parentElement?.clientWidth ?? 0;
        detailCanvas.height = detailCanvas.width * 0.8;
        enableHighDpiCanvas(detailCanvas);

        const context = detailCanvas.getContext("2d");

        if (!context) {
          return;
        }

        const pixelRatio = getPixelRatio();
        const { xMin, fontBaseline, fontSize } = getGlyphPosition(font, detailCanvas, glyph);

        context.clearRect(0, 0, detailCanvas.width, detailCanvas.height);
        context.fillStyle = "#F9C4C4";
        context.fillRect(
          32,
          fontBaseline,
          detailCanvas.width / pixelRatio - 64,
          1
        );
        glyph.draw(context, xMin, fontBaseline, fontSize);
      };

      const writeGlyph = (glyphCanvas: HTMLCanvasElement, glyphIndex: number) => {
        if (glyphIndex >= font.numGlyphs) {
          return;
        }

        glyphCanvas.id = `g${glyphIndex}`;
        glyphCanvas.dataset.glyphIndex = String(glyphIndex);

        const glyph = font.glyphs.get(glyphIndex);
        const context = glyphCanvas.getContext("2d");

        if (!context) {
          return;
        }

        context.clearRect(0, 0, glyphCanvas.width, glyphCanvas.height);
        const { xMin, fontBaseline, fontSize } = getGlyphPosition(font, glyphCanvas, glyph);
        glyph.draw(context, xMin, fontBaseline, fontSize);
      };

      const highlightPagination = (pageNumber: number) => {
        removeClass("selected-page");
        document.getElementById(`p${pageNumber}`)?.classList.add("selected-page");
      };

      const clearGlyphCanvases = () => {
        removeClass("active");

        const glyphCanvases = Array.from(
          glyphGrid.getElementsByClassName("glyph")
        ) as HTMLCanvasElement[];

        glyphCanvases.forEach((canvas) => {
          canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
        });
      };

      const displaySelectedGlyphPage = (glyphsPerPage: number, pageNumber: number) => {
        clearGlyphCanvases();
        highlightPagination(pageNumber);

        const firstGlyphIndex = pageNumber * glyphsPerPage;
        const glyphCanvases = Array.from(
          glyphGrid.getElementsByClassName("glyph")
        ) as HTMLCanvasElement[];

        for (let index = 0; index < glyphsPerPage; index += 1) {
          writeGlyph(glyphCanvases[index], firstGlyphIndex + index);
        }
      };

      const createGlyphCanvas = () => {
        const glyphCanvasContainer = document.createElement("div");
        glyphCanvasContainer.classList.add("glyph-container");

        const canvasWidth = glyphGrid.offsetWidth / getColumnCount() - 1;
        const glyphCanvas = document.createElement("canvas");
        glyphCanvas.width = canvasWidth;
        glyphCanvas.height = canvasWidth * 1.2;
        glyphCanvas.className = "glyph";
        enableHighDpiCanvas(glyphCanvas);

        glyphCanvasContainer.appendChild(glyphCanvas);
        glyphCanvasContainer.addEventListener("click", (event) => {
          const target = event.target;

          if (!(target instanceof HTMLCanvasElement)) {
            return;
          }

          const glyphIndex = Number(target.dataset.glyphIndex);

          if (Number.isNaN(glyphIndex)) {
            return;
          }

          displaySelectedGlyph(font.glyphs.get(glyphIndex));
        });

        glyphGrid.appendChild(glyphCanvasContainer);
      };

      const displayGlyphGrid = (glyphsPerPage: number) => {
        glyphGrid.innerHTML = "";

        for (let index = 0; index < glyphsPerPage; index += 1) {
          createGlyphCanvas();
        }
      };

      const displayPagination = (glyphsPerPage: number) => {
        const numberOfPages = Math.ceil(font.numGlyphs / glyphsPerPage);
        glyphPagination.innerHTML = "";

        for (let index = 0; index < numberOfPages; index += 1) {
          const pageLink = document.createElement("a");
          pageLink.href = "#";
          pageLink.id = `p${index}`;
          pageLink.textContent = String(index + 1);

          pageLink.addEventListener("click", (event) => {
            event.preventDefault();
            displaySelectedGlyphPage(glyphsPerPage, index);
          });

          glyphPagination.appendChild(pageLink);
        }
      };

      const getInitialGlyph = () => {
        const searchParams = new URL(window.location.href).searchParams;
        let glyphIndex = Number(searchParams.get("i") ?? 5);

        if (Number.isNaN(glyphIndex)) {
          glyphIndex = 5;
        }

        if (glyphIndex >= font.numGlyphs) {
          glyphIndex = font.numGlyphs - 1;
        }

        if (glyphIndex < 0) {
          glyphIndex = 0;
        }

        return font.glyphs.get(glyphIndex);
      };

      const glyphsPerPage = getGlyphsPerPage();
      const initialGlyph = getInitialGlyph();
      const initialGlyphPage = Math.floor(initialGlyph.index / glyphsPerPage);

      displayPagination(glyphsPerPage);
      displayGlyphGrid(glyphsPerPage);
      displaySelectedGlyphPage(glyphsPerPage, initialGlyphPage);
      displaySelectedGlyph(initialGlyph);
    });
  }, [fontClassName, fontFile, scriptReady]);

  return (
    <>
      <Script src="/js/opentype.min.js" strategy="afterInteractive" onLoad={() => setScriptReady(true)} />

      <header className="type-detail-header m2">
        <h2>
          <a href={typefacePath}>{typefaceName}</a> / <span className="w400">Glyph inspector</span>
        </h2>
      </header>

      <div className="grid">
        <div className="gr1 gc3" id="glyph-detail">
          <canvas id="glyph-detail-canvas" ref={detailCanvasRef} />
          <div id="glyph-info" ref={glyphInfoRef}>
            <h3>Glyph</h3>
            <p>Undefined</p>
            <h3>Glyph Name</h3>
            <p>Undefined</p>
            <h3>HTML Code</h3>
            <p>Undefined</p>
            <h3>CSS Code</h3>
            <p>Undefined</p>
          </div>
        </div>

        <div className="gr1 gc9" id="glyph-grid-container">
          <div className="pagination-wrapper">
            <div id="glyph-pagination" ref={glyphPaginationRef} />
          </div>
          <div id="glyph-grid" ref={glyphGridRef} />
        </div>
      </div>
    </>
  );
}
