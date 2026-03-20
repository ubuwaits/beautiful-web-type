export type Glyph = {
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

export type Font = {
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

export type OpentypeRuntime = {
  load: (fontFile: string, callback: (error: Error | null, font?: Font) => void) => void;
  parse: (fontData: ArrayBuffer) => Font;
};

export type Wawoff2Module = {
  decompress?: (fontData: ArrayBuffer | Uint8Array) => ArrayBuffer | Uint8Array | number[];
  onRuntimeInitialized?: () => void;
};

type ReadyWawoff2Module = Wawoff2Module & {
  decompress: NonNullable<Wawoff2Module["decompress"]>;
};

type GlyphInspectorFontLoaderDeps = {
  getOpentype: () => OpentypeRuntime | undefined;
  fetchArrayBuffer: (fontFile: string) => Promise<ArrayBuffer>;
  loadScript: (src: string) => Promise<void>;
  getWoff2Module: () => Wawoff2Module | undefined;
  setWoff2Module: (module: Wawoff2Module) => void;
};

const WAWOFF2_DECOMPRESSOR_SRC = "/js/wawoff2-decompress.js";

const scriptPromises = new Map<string, Promise<void>>();
let woff2ModulePromise: Promise<ReadyWawoff2Module> | null = null;

declare global {
  interface Window {
    Module?: Wawoff2Module;
    opentype?: OpentypeRuntime;
  }
}

function isWoff2FontFile(fontFile: string) {
  return fontFile.toLowerCase().endsWith(".woff2");
}

function normalizeDecompressedFontData(fontData: ArrayBuffer | Uint8Array | number[]) {
  if (fontData instanceof ArrayBuffer) {
    return fontData;
  }

  const typedArray = fontData instanceof Uint8Array ? fontData : Uint8Array.from(fontData);
  const arrayBuffer = new ArrayBuffer(typedArray.byteLength);
  const bufferView = new Uint8Array(arrayBuffer);
  bufferView.set(typedArray);

  return arrayBuffer;
}

function loadOpentypeFont(opentype: OpentypeRuntime, fontFile: string) {
  return new Promise<Font>((resolve, reject) => {
    opentype.load(fontFile, (error, font) => {
      if (error) {
        reject(error);
        return;
      }

      if (!font) {
        reject(new Error(`Font could not be loaded: ${fontFile}`));
        return;
      }

      resolve(font);
    });
  });
}

function loadScriptFromDocument(src: string) {
  const cachedPromise = scriptPromises.get(src);

  if (cachedPromise) {
    return cachedPromise;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

    const handleLoad = () => resolve();
    const handleError = () => reject(new Error(`Failed to load script: ${src}`));

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }

      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.loaded = "false";
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true }
    );
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  }).catch((error) => {
    scriptPromises.delete(src);
    throw error;
  });

  scriptPromises.set(src, promise);

  return promise;
}

async function ensureWoff2Module(
  deps: GlyphInspectorFontLoaderDeps
): Promise<ReadyWawoff2Module> {
  if (woff2ModulePromise) {
    return woff2ModulePromise;
  }

  const existingModule = deps.getWoff2Module();

  if (existingModule?.decompress) {
    return existingModule as ReadyWawoff2Module;
  }

  woff2ModulePromise = new Promise<ReadyWawoff2Module>((resolve, reject) => {
    const previousModule = deps.getWoff2Module();
    const previousOnRuntimeInitialized = previousModule?.onRuntimeInitialized;

    const finalizeModule = () => {
      const readyModule = deps.getWoff2Module();

      if (!readyModule?.decompress) {
        woff2ModulePromise = null;
        reject(new Error("WOFF2 decompressor did not initialize."));
        return;
      }

      resolve(readyModule as ReadyWawoff2Module);
    };

    deps.setWoff2Module({
      ...(previousModule ?? {}),
      onRuntimeInitialized: () => {
        previousOnRuntimeInitialized?.();
        finalizeModule();
      }
    });

    deps.loadScript(WAWOFF2_DECOMPRESSOR_SRC)
      .then(() => {
        if (deps.getWoff2Module()?.decompress) {
          finalizeModule();
        }
      })
      .catch((error) => {
        woff2ModulePromise = null;
        reject(error instanceof Error ? error : new Error(String(error)));
      });
  });

  return woff2ModulePromise;
}

const browserGlyphInspectorFontLoaderDeps: GlyphInspectorFontLoaderDeps = {
  getOpentype: () => window.opentype,
  fetchArrayBuffer: async (fontFile) => {
    const response = await fetch(fontFile);

    if (!response.ok) {
      throw new Error(`Font could not be loaded: ${response.status} ${response.statusText}`);
    }

    return response.arrayBuffer();
  },
  loadScript: loadScriptFromDocument,
  getWoff2Module: () => window.Module,
  setWoff2Module: (module) => {
    window.Module = module;
  }
};

export async function loadGlyphInspectorFont(
  fontFile: string,
  deps: GlyphInspectorFontLoaderDeps = browserGlyphInspectorFontLoaderDeps
) {
  const opentype = deps.getOpentype();

  if (!opentype) {
    throw new Error("opentype.js is not available.");
  }

  if (!isWoff2FontFile(fontFile)) {
    return loadOpentypeFont(opentype, fontFile);
  }

  const woff2Module = await ensureWoff2Module(deps);
  const fontData = await deps.fetchArrayBuffer(fontFile);
  const decompressedFontData = normalizeDecompressedFontData(woff2Module.decompress(fontData));

  return opentype.parse(decompressedFontData);
}

export function createGlyphInspectorFontLoader(deps: GlyphInspectorFontLoaderDeps) {
  return (fontFile: string) => loadGlyphInspectorFont(fontFile, deps);
}

export function resetGlyphInspectorFontLoaderForTests() {
  scriptPromises.clear();
  woff2ModulePromise = null;
}
