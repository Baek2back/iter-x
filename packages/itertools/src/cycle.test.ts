import { describe, expect, it } from "vitest";
import { cycle } from "./cycle";
import { repeat } from "./repeat";
import { take } from "./take";

describe("cycle", () => {
	it("cycle with empty list", () => {
		expect([...cycle([])]).toEqual([]);
	});

	it("cycles", () => {
		expect(take(3, cycle(["x"]))).toEqual(["x", "x", "x"]);
		expect(take(5, cycle(["even", "odd"]))).toEqual([
			"even",
			"odd",
			"even",
			"odd",
			"even",
		]);
	});

	it("cycles with infinite iterable", () => {
		expect(take(3, cycle(repeat("x")))).toEqual(["x", "x", "x"]);
	});
});
