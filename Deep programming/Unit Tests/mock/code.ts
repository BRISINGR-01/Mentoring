import DB from "./db";
import type StorageManager from "./StorageManager";

export enum Priorities {
	high = "high",
	mid = "mid",
	low = "low",
}

// depends on DB
export function hasHighPriority(cryptoName: string) {
	return new DB().execute(`SELECT FROM crypto WHERE priority = ${cryptoName}`) === Priorities.high;
}

// still depends on DB
export function hasHighPriority2(cryptoName: string, db: DB) {
	return db.execute(`SELECT FROM crypto WHERE priority = ${cryptoName}`) === Priorities.high;
}

// uses "Dependency Inversion" through "Dependency Injection" to achieve "Abstraction"
// translation - `hasHighPriority3` doesn't depend on the database and can be tested independently
export function hasHighPriority3(cryptoName: string, storage: StorageManager) {
	return storage.getCryptoPriority(cryptoName) === Priorities.high;
}
