import { describe, expect, it } from "vitest";
import { islice } from "./islice";

describe("islice", () => {
  it("islice iwth empty iterable", () => {
    expect([...islice([], 2)]).toEqual([]);
  });

  it("islice with arguments", () => {
    expect([...islice("ABCDEFG", 2)]).toEqual(["A", "B"]);
    expect([...islice("ABCDEFG", 2, 4)]).toEqual(["C", "D"]);
    expect([...islice("ABCDEFG", 2, null)]).toEqual(["C", "D", "E", "F", "G"]);
    expect([...islice("ABCDEFG", 0, null, 2)]).toEqual(["A", "C", "E", "G"]);
  });

  it("islice invalid arguments", () => {
    expect(() => [...islice("ABCDEFG", -2)]).toThrowError();
    expect(() => [...islice("ABCDEFG", -2, -3)]).toThrowError();
    expect(() => [...islice("ABCDEFG", 0, 3, 0)]).toThrowError();
    expect(() => [...islice("ABCDEFG", 0, 3, -1)]).toThrowError();
  });
});
