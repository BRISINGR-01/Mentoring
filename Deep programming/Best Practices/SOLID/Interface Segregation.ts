// A class should not be required to implement parts of an interface it doesn't use

interface Shape {
	area(): number;
	// ...
}

class Circle implements Shape {
	constructor(public radius: number) {}

	area() {
		return Math.PI * this.radius ** 2;
	}
}

class Line implements Shape {
	constructor(public length: number) {}

	area(): number {
		// can be accidentally called and make a problem
		throw new Error("Method not implemented.");
	}
}

function totalArea(shapes: Shape[]) {
	let sum = 0;

	for (const shape of shapes) {
		if (shape instanceof Line) continue;

		sum += shape.area();
	}
}
