import { isNumber, sum, sumOfDecimal } from "./app-finished";

describe("sum", () => {
	test("should return the sum of two integers", () => {
		expect(sum(2, 3)).toBe(5);
	});

	test("should return the sum of two decimal numbers", () => {
		expect(sum(1.5, 2.5)).toBe(4);
	});

	test("should return 0 if either argument is not a number", () => {
		expect(sum("2", 3)).toBe(0);
		expect(sum(2, NaN)).toBe(0);
	});
});

describe("isNumber", () => {
	test("should return true for a valid number", () => {
		expect(isNumber(-0)).toBe(true);
		expect(isNumber(2)).toBe(true);
		expect(isNumber(2.5)).toBe(true);
	});

	test("should return false for non-numbers", () => {
		for (const val of [
			false,
			true,
			"2",
			"2.5",
			"",
			"sth",
			{ id: 4 },
			null,
			NaN,
			Symbol("-"),
			Object,
			Infinity,
			undefined,
			function () {},
			[],
		]) {
			expect(isNumber(val)).toBe(false);
		}
	});
});

describe("sumOfDecimal", () => {
	test("should return the sum of two integers", () => {
		expect(sumOfDecimal(0.1, 0.2)).toBe(0.3);
		expect(sumOfDecimal(1.001, 0.003)).toBe(1);
		expect(sumOfDecimal(1.004, 0.003)).toBe(1.01);
	});

	test("should return the sum of two decimal numbers with a specified accuracy", () => {
		expect(sumOfDecimal(3.004, 1.003, 2)).toBe(sumOfDecimal(3.004, 1.003));
		expect(sumOfDecimal(3.004, 1.003, 3)).toBe(4.007);
		expect(sumOfDecimal(2.01, 0.03, 1)).toBe(2);
	});
});
