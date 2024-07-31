import { describe, expect, it } from "vitest";
import { flatten } from "./flatten";

describe("flatten", () => {
  it("return flatten iterables in iterables of iterables", () => {
    const result = [
      ...flatten([
        [1, 2],
        [3, 4],
      ]),
    ];

    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("only one level flatten", () => {
    const result = [...flatten([[[1, 2]], [[3, 4]]])];

    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
