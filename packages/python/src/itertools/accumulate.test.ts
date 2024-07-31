import { describe, expect, it } from "vitest";
import { accumulate } from "./accumulate";

describe("accumulate", () => {
  it("should accumulate values from iterator", () => {
    const iterable = accumulate([1, 2, 3], (x, y) => x + y);

    expect([...iterable]).toEqual([1, 3, 6]);
  });

  it("should accumulate values from iterator with initial value", () => {
    const iterable = accumulate([1, 2, 3, 4, 5], (a, b) => a + b, 100);

    expect([...iterable]).toEqual([100, 101, 103, 106, 110, 115]);
  });
});
