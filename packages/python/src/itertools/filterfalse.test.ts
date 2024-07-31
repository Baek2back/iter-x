import { describe, expect, it } from "vitest";

import { filterfalse } from "./filterfalse";

describe("filterfalse", () => {
  it("should filter elements predicate return true", () => {
    expect([...filterfalse([1, 4, 6, 3, 8], (x) => x < 5)]).toEqual([6, 8]);
  });

  it("should filter truthy value if predicate did not specify", () => {
    expect([...filterfalse([1, undefined, 2, null, 3, "", 4, 0, 5])]).toEqual([
      undefined,
      null,
      "",
      0,
    ]);
  });
});
