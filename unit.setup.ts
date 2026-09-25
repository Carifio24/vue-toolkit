import { beforeAll } from "vitest";

beforeAll(() => {

  globalThis.WebGLRenderingContext = class WebGLRenderingContext {
    constructor() {
      this.canvas = null;
    }
  };
  
  globalThis.WebGL2RenderingContext = class WebGL2RenderingContext extends global.WebGLRenderingContext {};
});
