import { describe, expect, it } from "vitest";
import { compress } from "./compress";

describe("compress", () => {
  it("compress on empty list", () => {
    expect([...compress([], [])]).toEqual([]);
  });

  it("compress removes selected items", () => {
    expect([...compress("ABCDEF", [1, 0, 1, 0, 1, 1])]).toEqual([
      "A",
      "C",
      "E",
      "F",
    ]);

    expect([
      ...compress("ABCDEF", [true, false, true, false, true, true]),
    ]).toEqual(["A", "C", "E", "F"]);
  });
});
