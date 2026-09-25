import { vi } from "vitest";

const WEBGL_CONTEXTS = {
  1: "webgl",
  2: "webgl2",
  "experimental": "experimental-webgl",
};

export function mockWebGL(version: 1 | 2 | "experimental" | null) {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(function (this: HTMLCanvasElement, contextID, _options) {
    if (version && WEBGL_CONTEXTS[version] == contextID) {
      return {
        canvas: this,
        clearColor: vi.fn(),
        clear: vi.fn(),
      } as unknown as RenderingContext;
    };
    return null;
  });
}
