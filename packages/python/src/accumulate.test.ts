import { describe, expect, it } from "vitest";
import { accumulate } from "./accumulate";
import { take } from "./take";

describe("accumulate", () => {
  it("should accumulate values from iterator", () => {
    const iterable = accumulate([1, 2, 3], (x, y) => x + y);

    expect(take(Number.POSITIVE_INFINITY, iterable)).toEqual([1, 3, 6]);
  });

  it("should accumulate values from iterator with initial value", () => {
    const iterable = accumulate([1, 2, 3, 4, 5], (a, b) => a + b, 100);

    expect(take(Number.POSITIVE_INFINITY, iterable)).toEqual([
      100, 101, 103, 106, 110, 115,
    ]);
  });
});
