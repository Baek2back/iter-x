import { describe, expect, it } from "vitest";
import { take } from "../more-itertools";
import { count } from "./count";

describe("count", () => {
	it("default counter", () => {
		expect(take(6, count())).toEqual([0, 1, 2, 3, 4, 5]);
	});

	it("counter from different start value", () => {
		expect(take(6, count(1))).toEqual([1, 2, 3, 4, 5, 6]);
		expect(take(6, count(-3))).toEqual([-3, -2, -1, 0, 1, 2]);
	});

	it("counter backwards", () => {
		expect(take(6, count(4, -1))).toEqual([4, 3, 2, 1, 0, -1]);
		expect(take(5, count(-3, -2))).toEqual([-3, -5, -7, -9, -11]);
	});
});
