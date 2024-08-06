import { describe, expect, it } from "vitest";
import { takewhile } from "./takewhile";

describe("takewhile", () => {
  it("takewhile on empty list", () => {
    const result = [...takewhile((x) => x < 5, [])];
    expect(result).toEqual([]);
  });

  it("takewhile on list", () => {
    const result = [...takewhile((x) => x < 5, [1, 4, 6, 3, 8])];
    expect(result).toEqual([1, 4]);
  });
});
