import { describe, expect, it } from "vitest";
import { pairwise } from "./pairwise";

describe("pairwise", () => {
  it("should generate pairwise iterator", () => {
    const result = [...pairwise("ABCDEFG")];
    expect(result).toEqual([
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
      ["E", "F"],
      ["F", "G"],
    ]);
  });

  it("should not generate any values when iterator is empty", () => {
    const result = [...pairwise("")];
    expect(result).toEqual([]);
  });

  it("should not generate any values when iterator is short to be pair", () => {
    const result = [...pairwise("A")];
    expect(result).toEqual([]);
  });
});
