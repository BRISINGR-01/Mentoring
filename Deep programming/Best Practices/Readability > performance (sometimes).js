// Truth is that rarely performance is affected the way you think - iterating twice over a list of numbers may be slower,
// but it is more readable - How often do you work with arrays longer than 10-30 elements (this is nothing for modern computers)?

function main() {
	const numbers = getNumbers();
	let sum = 0;

	for (const n of numbers) {
		sum += n;
		send("Data: " + n);
	}

	console.log(sum);
}

/* -------------------------------------------------------------------------------------------------------- */

function main() {
	console.log(getSum());
	sendData();
}

function getSum() {
	return getNumbers().reduce((sum, number) => sum + number);
}

function sendData() {
	for (const n of getNumbers()) {
		send("Data: " + n);
	}
}
