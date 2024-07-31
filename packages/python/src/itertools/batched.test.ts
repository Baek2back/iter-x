import { describe, expect, it } from "vitest";
import { take } from "../more-itertools/take";
import { batched } from "./batched";

describe("batched", () => {
  it("returns remainder in final batch", () => {
    const result = take(
      Number.POSITIVE_INFINITY,
      batched([1, 1, 1, 1, 1, 1, 2, 2], 3),
    );
    expect(result).toEqual([
      [1, 1, 1],
      [1, 1, 1],
      [2, 2],
    ]);
  });

  it("throw error when batch length does not matched n with strict option", () => {
    expect(() => {
      take(
        Number.POSITIVE_INFINITY,
        batched([1, 1, 1, 1, 1, 1, 2, 2], 3, { strict: true }),
      );
    }).toThrow("batched(): incomplete batch");
  });

  it("throw error when n is less than 1", () => {
    expect(() => {
      take(Number.POSITIVE_INFINITY, batched([1, 1, 1, 1, 1, 1, 2, 2], 0));
    }).toThrow("n must be at least one");
  });
});
