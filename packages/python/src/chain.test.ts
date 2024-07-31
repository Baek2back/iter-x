import { describe, expect, it } from "vitest";
import { chain } from "./chain";
import { take } from "./take";

describe("concat", () => {
  it("concat two iterables", () => {
    const result = take(Number.POSITIVE_INFINITY, chain("ABC", "DEF"));

    expect(result).toEqual(["A", "B", "C", "D", "E", "F"]);
  });
});
