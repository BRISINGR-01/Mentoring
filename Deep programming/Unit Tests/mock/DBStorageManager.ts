import DB from "./db";
import StorageManager from "./StorageManager";

export default class DBStorageManager implements StorageManager {
	getCryptoPriority(cryptoName: string) {
		return new DB().execute(`SELECT FROM crypto WHERE priority = ${cryptoName}`);
	}
	// ...
}
