// A child class can safely replace the parent

class Rectangle {
	constructor(public width: number, public height: number) {}

	public sidesRatio() {
		return this.width / this.height;
	}
}

class Square extends Rectangle {
	constructor(width: number) {
		super(width, width);
	}

	public sidesRatio(): number {
		throw new Error("No ratio for squares");
	}
}

function averageRatio(shapes: Rectangle[]) {
	let sum = 0;

	for (const shape of shapes) {
		sum += shape.sidesRatio();
	}

	return sum / shapes.length;
}

averageRatio([new Square(10), new Rectangle(10, 10)]);
