const PRECISION = 10000;

function isNumber(n) {
	return typeof n === "number" && !isNaN(n) && isFinite(n);
}

function sum() {
	const total = [...arguments].reduce((sum, n) => sum + (isNumber(n) ? n : 0));

	return Math.round(total * PRECISION) / PRECISION;
}

let numbers = [1, 2, 3];

const n = sum(0.001, 0.2, 8, 9000); // 5

console.log(n);
