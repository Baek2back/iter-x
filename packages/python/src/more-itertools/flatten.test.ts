import { describe, expect, it } from "vitest";
import { take } from "../more-itertools";
import { flatten } from "./flatten";

describe("flatten", () => {
  it("return flatten iterables in iterables of iterables", () => {
    const result = take(
      Number.POSITIVE_INFINITY,
      flatten([
        [1, 2],
        [3, 4],
      ]),
    );

    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("only one level flatten", () => {
    const result = take(
      Number.POSITIVE_INFINITY,
      flatten([[[1, 2]], [[3, 4]]]),
    );

    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
