import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  createGlyphInspectorFontLoader,
  resetGlyphInspectorFontLoaderForTests,
  type Font,
  type OpentypeRuntime,
  type Wawoff2Module
} from "@/lib/glyph-inspector-font-loader";

function createMockFont(): Font {
  return {
    numGlyphs: 42,
    unitsPerEm: 1000,
    glyphs: {
      get: vi.fn()
    },
    tables: {
      head: {
        xMax: 800,
        xMin: -20,
        yMax: 900,
        yMin: -200
      }
    }
  };
}

describe("glyph inspector font loader", () => {
  beforeEach(() => {
    resetGlyphInspectorFontLoaderForTests();
  });

  it("uses opentype.load for non-WOFF2 font files", async () => {
    const font = createMockFont();
    const load = vi.fn((fontFile: string, callback: (error: Error | null, font?: Font) => void) => {
      callback(null, font);
    });
    const parse = vi.fn();
    const fetchArrayBuffer = vi.fn();
    const loadScript = vi.fn();

    const loader = createGlyphInspectorFontLoader({
      getOpentype: () => ({ load, parse }) as OpentypeRuntime,
      fetchArrayBuffer,
      loadScript,
      getWoff2Module: () => undefined,
      setWoff2Module: vi.fn()
    });

    await expect(loader("/assets/fonts/test.woff")).resolves.toBe(font);
    expect(load).toHaveBeenCalledWith(
      "/assets/fonts/test.woff",
      expect.any(Function)
    );
    expect(parse).not.toHaveBeenCalled();
    expect(fetchArrayBuffer).not.toHaveBeenCalled();
    expect(loadScript).not.toHaveBeenCalled();
  });

  it("decompresses WOFF2 fonts before parsing them", async () => {
    const font = createMockFont();
    const compressedFontData = new ArrayBuffer(8);
    const decompressedFontData = new Uint8Array([1, 2, 3, 4]);
    const load = vi.fn();
    const parse = vi.fn().mockReturnValue(font);
    const fetchArrayBuffer = vi.fn().mockResolvedValue(compressedFontData);
    const loadScript = vi.fn(async () => {
      const onRuntimeInitialized = woff2Module?.onRuntimeInitialized;
      woff2Module = {
        ...(woff2Module ?? {}),
        decompress,
        onRuntimeInitialized
      };
      onRuntimeInitialized?.();
    });
    const decompress = vi.fn().mockReturnValue(decompressedFontData);
    let woff2Module: Wawoff2Module | undefined;

    const loader = createGlyphInspectorFontLoader({
      getOpentype: () => ({ load, parse }) as OpentypeRuntime,
      fetchArrayBuffer,
      loadScript,
      getWoff2Module: () => woff2Module,
      setWoff2Module: (module) => {
        woff2Module = module;
      }
    });

    await expect(loader("/assets/fonts/test.woff2")).resolves.toBe(font);
    expect(load).not.toHaveBeenCalled();
    expect(fetchArrayBuffer).toHaveBeenCalledWith("/assets/fonts/test.woff2");
    expect(loadScript).toHaveBeenCalledWith("/js/wawoff2-decompress.js");
    expect(decompress).toHaveBeenCalledWith(compressedFontData);

    const parsedFontData = parse.mock.calls[0]?.[0];
    expect(parsedFontData).toBeInstanceOf(ArrayBuffer);
    expect(Array.from(new Uint8Array(parsedFontData))).toEqual(Array.from(decompressedFontData));
  });

  it("initializes the WOFF2 decompressor only once", async () => {
    const font = createMockFont();
    const parse = vi.fn().mockReturnValue(font);
    const fetchArrayBuffer = vi.fn().mockResolvedValue(new ArrayBuffer(8));
    const decompress = vi.fn().mockImplementation((fontData: ArrayBuffer) => new Uint8Array(fontData));
    const loadScript = vi.fn(async () => {
      const onRuntimeInitialized = woff2Module?.onRuntimeInitialized;
      woff2Module = {
        ...(woff2Module ?? {}),
        decompress,
        onRuntimeInitialized
      };
      onRuntimeInitialized?.();
    });
    let woff2Module: Wawoff2Module | undefined;

    const loader = createGlyphInspectorFontLoader({
      getOpentype: () =>
        ({
          load: vi.fn(),
          parse
        }) as OpentypeRuntime,
      fetchArrayBuffer,
      loadScript,
      getWoff2Module: () => woff2Module,
      setWoff2Module: (module) => {
        woff2Module = module;
      }
    });

    await loader("/assets/fonts/test-a.woff2");
    await loader("/assets/fonts/test-b.woff2");

    expect(loadScript).toHaveBeenCalledTimes(1);
    expect(fetchArrayBuffer).toHaveBeenCalledTimes(2);
    expect(parse).toHaveBeenCalledTimes(2);
    expect(decompress).toHaveBeenCalledTimes(2);
  });
});
