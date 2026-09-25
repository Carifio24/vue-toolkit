/**
 * @vitest-environment jsdom
 */

import { filterInPlace, isWebGLEnabled } from "@/utils";
import { describe, expect, it, test } from "vitest";
import { mockWebGL } from "./utils";

const WEBGL_VERSIONS = [1, 2] as const;

describe("Test utilities", () => {

  it("should correctly filter primitives", () => {
    const integers = [1, 6, 4, 2, 5, 3];
    filterInPlace(integers, t => t > 3);
    expect(integers).toEqual([6, 4, 5]);

    const strings = [
      "alpha",
      "beta",
      "gamma",
      "delta",
      "epsilon",
      "zeta",
    ];
    filterInPlace(strings, s => s.length > 4 && s.charAt(0) != "e");
    expect(strings).toEqual(["alpha", "gamma", "delta"]);
  });

  it("Should correctly filter objects", () => {
    const objects = [
      { name: "Alice", id: 1 },
      { name: "Bob", id: 2 },
      { name: "Colin", id: 3},
    ];

    filterInPlace(objects, t => t.name == "Bob");
    expect(objects.length).toEqual(1);
    expect(objects).toContainEqual({ name: "Bob", id: 2});
  });

  test.each(WEBGL_VERSIONS)("should correctly determine the available WebGL version", (expectedVersion) => {
    mockWebGL(expectedVersion);
    WEBGL_VERSIONS.forEach(version => {
      expect(isWebGLEnabled(version)).toBe(version == expectedVersion);
    });
  });

});
