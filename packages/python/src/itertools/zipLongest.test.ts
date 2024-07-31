import { describe, expect, it } from "vitest";
import { zipLongest } from "./zipLongest";

describe("zipLongest", () => {
  it("zipLongest with empty iterable", () => {
    const result = [...zipLongest([], [])];
    expect(result).toEqual([]);
  });
  it("should zip until the longest value", () => {
    const result = [...zipLongest("ABCD", "xy", { fillvalue: "-" })];
    expect(result).toEqual([
      ["A", "x"],
      ["B", "y"],
      ["C", "-"],
      ["D", "-"],
    ]);
  });

  it("should zip fill with undefined", () => {
    const result = [...zipLongest("", "ABCD")];
    expect(result).toEqual([
      [undefined, "A"],
      [undefined, "B"],
      [undefined, "C"],
      [undefined, "D"],
    ]);
  });
});
