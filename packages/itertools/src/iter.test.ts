import { describe, expect, it } from "vitest";
import { iter } from "./iter";

describe("iter", () => {
  it("throw TypeError when object is not an Iterable or Iterator", () => {
    expect(() => iter(1 as unknown as Iterable<number>)).toThrow(TypeError);
  });

  it("return iterator when pass iterator itself", () => {
    const iterator = [][Symbol.iterator]();
    expect(iter(iterator)).toBe(iterator);
  });

  it("return iterator when pass iterable", () => {
    const iterable = "";
    expect(iter(iterable)).toStrictEqual(iterable[Symbol.iterator]());
  });
});
