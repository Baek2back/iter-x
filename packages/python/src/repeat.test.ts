import { describe, expect, it } from "vitest";
import { repeat } from "./repeat";

describe("repeat", () => {
  it("", () => {
    const result: number[] = [];
    for (const n of repeat(1)) {
      result.push(n);
      if (result.length >= 3) break;
    }

    expect(result).toEqual([1, 1, 1]);
  });
});
