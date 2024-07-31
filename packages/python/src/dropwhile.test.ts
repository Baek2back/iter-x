import { describe, expect, it } from "vitest";
import { dropwhile } from "./dropwhile";
import { take } from "./take";

describe("dropwhile", () => {
  it("dropwhile on empty list", () => {
    expect(
      take(
        Number.POSITIVE_INFINITY,
        dropwhile((x) => x < 2, []),
      ),
    ).toEqual([]);
  });

  it("dropwhile on list", () => {
    expect(
      take(
        Number.POSITIVE_INFINITY,
        dropwhile((x) => x % 2 === 0, [1]),
      ),
    ).toEqual([1]);
    expect(
      take(
        Number.POSITIVE_INFINITY,
        dropwhile((x) => x % 2 === 1, [1]),
      ),
    ).toEqual([]);
    expect(
      take(
        Number.POSITIVE_INFINITY,
        dropwhile((x) => x < 5, [1, 4, 6, 3, 8]),
      ),
    ).toEqual([6, 3, 8]);
  });
});
