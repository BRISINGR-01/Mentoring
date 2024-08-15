class NumberRange {
	constructor(readonly min: number, readonly max: number) {}

	contains(n: number) {
		return n >= this.min && n <= this.max;
	}
}

class PhoneNumber {
	readonly countryCode: string;
	readonly number: string;

	constructor(countryCode: string, number: string) {
		this.countryCode = countryCode;
		this.number = number;
	}
}

const phoneNumber = new PhoneNumber("(+1)", "123 456 7890");

const numberRange = new NumberRange(0, 100);

numberRange.contains(50);
