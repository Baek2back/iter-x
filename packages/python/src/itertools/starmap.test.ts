import { describe, expect, it } from "vitest";
import { starmap } from "./starmap";

describe("starmap", () => {
  it("starmap with pre-zipped tuple", () => {
    const result = [
      ...starmap(Math.pow, [
        [2, 5],
        [3, 2],
        [10, 3],
      ]),
    ];

    expect(result).toEqual([32, 9, 1000]);
  });
});
