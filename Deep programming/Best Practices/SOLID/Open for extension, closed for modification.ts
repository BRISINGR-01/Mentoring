// We should be able to add new features without modifying the existing code
//						 (open) (extend)

// ex: try to add a new type of shape without modifying totalArea

export interface Shape {
	area(): number;
}

class Circle implements Shape {
	constructor(public radius: number) {}

	area() {
		return Math.PI * this.radius ** 2;
	}
}

class Rectangle implements Shape {
	constructor(public width: number, public height: number) {}

	area() {
		return this.width * this.height;
	}
}

function totalArea(shapes: Shape[]) {
	let sum = 0;

	for (const shape of shapes) {
		if (shape instanceof Rectangle) {
			sum += shape.width * shape.height;
			continue;
		}

		if (shape instanceof Circle) {
			sum += Math.PI * shape.radius ** 2;
			continue;
		}
	}

	return sum;
}

function totalArea2(shapes: Shape[]) {
	let sum = 0;

	for (const shape of shapes) {
		sum += shape.area();
	}

	return sum;
}

totalArea([new Circle(10), new Rectangle(10, 10)]);
