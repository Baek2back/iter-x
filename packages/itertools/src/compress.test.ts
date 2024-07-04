import { describe, expect, it } from "vitest";
import { compress } from "./compress";
import { take } from "./take";

describe("compress", () => {
  it("compress on empty list", () => {
    expect(take(Number.POSITIVE_INFINITY, compress([], []))).toEqual([]);
  });

  it("compress removes selected items", () => {
    expect(
      take(Number.POSITIVE_INFINITY, compress("ABCDEF", [1, 0, 1, 0, 1, 1])),
    ).toEqual(["A", "C", "E", "F"]);

    expect(
      take(
        Number.POSITIVE_INFINITY,
        compress("ABCDEF", [true, false, true, false, true, true]),
      ),
    ).toEqual(["A", "C", "E", "F"]);
  });
});
