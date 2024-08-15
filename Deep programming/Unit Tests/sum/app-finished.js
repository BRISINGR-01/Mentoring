const SUM_ACCURACY = 2;

/**
 * Calculates the sum of two numbers, handling both integer and decimal cases.
 *
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @return {number} The sum of a and b.
 */
export function sum(a, b) {
	if (!isNumber(a) || !isNumber(b)) return 0;

	if (Number.isInteger(a) && Number.isInteger(b)) return a + b;

	return sumOfDecimal(a, b);
}

/**
 * Checks if a given value is a valid number.
 *
 * @param {*} n - The value to check.
 * @return {boolean} True if the value is a number, false otherwise.
 */
export function isNumber(n) {
	return typeof n === "number" && !isNaN(n) && isFinite(n);
}

/**
 * Calculates the sum of two decimal numbers with a specified accuracy.
 *
 * @param {number} a - The first decimal number to add.
 * @param {number} b - The second decimal number to add.
 * @param {number} [accuracy=2] - The number of decimal places to round the result to.
 * @return {number} The sum of a and b, rounded to the specified accuracy.
 */
export function sumOfDecimal(a, b, accuracy = SUM_ACCURACY) {
	accuracy = Math.max(0, accuracy);

	const multiplier = Math.pow(10, accuracy);
	const sum = a + b;

	return Math.round(sum * multiplier) / multiplier;
}
