import { hasHighPriority, hasHighPriority2 } from "./code";
import MockStorageManager from "./MockStorageManager";

const mock = new MockStorageManager();

describe("hasHighPriority", () => {
	test("should return true", () => {
		expect(hasHighPriority("test")).toBeTruthy();
	});

	test("should work with mock", () => {
		expect(hasHighPriority2("test", mock)).toBe(true);
	});
});
