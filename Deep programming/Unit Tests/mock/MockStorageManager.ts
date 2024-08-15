import StorageManager from "./StorageManager";
import { Priorities } from "./code";

export default class MockStorageManager implements StorageManager {
	getCryptoPriority(cryptoName: string) {
		return { bitcoin: Priorities.mid }[cryptoName] ?? Priorities.high;
	}
}
