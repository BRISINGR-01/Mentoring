import type { Priorities } from "./code";

export default interface StorageManager {
	getCryptoPriority(cryptoName: string): Priorities;
}
