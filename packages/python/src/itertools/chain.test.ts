import { describe, expect, it } from "vitest";
import { chain } from "./chain";

describe("concat", () => {
  it("concat two iterables", () => {
    const result = [...chain("ABC", "DEF")];

    expect(result).toEqual(["A", "B", "C", "D", "E", "F"]);
  });
});
