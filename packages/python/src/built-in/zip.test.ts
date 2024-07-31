import { describe, expect, it } from "vitest";
import { zip } from "./zip";

describe("zip", () => {
  it("zips an iterable correctly", () => {
    const result = [...zip([1, 2], [3, 4])];
    expect(result).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });

  it("return an empty iterables when pass empty iterables", () => {
    const result = [...zip([], [])];
    expect(result).toEqual([]);
  });

  it("throw Error pass different length iterables when strict option is true", () => {
    expect(() => {
      [...zip([1, 2], [1, 2, 3], { strict: true })];
    }).toThrow("zip() argument 2 is longer than argument 1");

    expect(() => {
      [...zip([1, 2, 3], [1, 2], { strict: true })];
    }).toThrow("zip() argument 1 is longer than argument 2");
  });
});
