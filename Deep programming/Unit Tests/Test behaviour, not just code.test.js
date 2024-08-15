class DataContainer {
	constructor(state = {}) {
		this.state = state;
	}
}

const SOME_CONSTANT = Object.freeze({
	FOO: "bar",
});

function getData(key) {
	return SOME_CONSTANT[key] ?? "unknown";
}

describe("Behaviour", () => {
	it("should initialize with empty data if no argument is passed", () => {
		const data = new DataContainer();
		expect(data.state).toEqual({});
	});

	it("should initialize with passed data", () => {
		expect(getData("FOO")).toBe("bar");
	});

	it('should return "unknown" if no data is found', () => {
		expect(getData("-")).toBe("unknown");
	});
});
