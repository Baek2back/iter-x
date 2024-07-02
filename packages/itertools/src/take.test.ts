import { describe, expect, it } from "vitest";
import { take } from "./take";

describe("take", () => {
	it("take on empty array", () => {
		expect(take(0, [])).toEqual([]);
		expect(take(-1, [])).toEqual([]);
		expect(take(1, [])).toEqual([]);
		expect(take(Number.POSITIVE_INFINITY, [])).toEqual([]);
		expect(take(Number.NEGATIVE_INFINITY, [])).toEqual([]);
	});

	it("take on infinite input", () => {
		expect(take(5, Math.PI.toString())).toEqual(["3", ".", "1", "4", "1"]);
	});

	it("returns a shallow clone when all items are taken", () => {
		const data = [1, 2, 3, 4, 5];
		const result = take(5, data);
		expect(result).toEqual([1, 2, 3, 4, 5]);
		expect(result).not.toBe(data);
	});
});
