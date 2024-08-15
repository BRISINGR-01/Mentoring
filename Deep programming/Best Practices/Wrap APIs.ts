// Wrap libraries, external apis... This gives you control and stability

import { Priorities } from "../Unit Tests/mock/code";

class LocalStorageManager {
	private get(key: string) {
		return localStorage.getItem(key) ?? "";
	}

	private set(key: string, value: string = "-") {
		localStorage.setItem(key, value);
	}

	getCryptoPriority(cryptoName: string) {
		const priority = this.get(`${CRYPTO_KEY}${cryptoName}`);
		return prioritiesMap[priority] ?? Priorities.low;
	}

	getAllCryptos() {
		const keys = Object.keys(localStorage).filter((key) => key.startsWith(CRYPTO_KEY));
		const cryptos = keys.map((key) => key.split("-")[1]);

		return cryptos;
	}

	setCryptoPriority(cryptoName: string, priority: Priorities) {
		this.set(`${CRYPTO_KEY}${cryptoName}`, priority.toString());
	}
}

const CRYPTO_KEY = "crypto-";

const prioritiesMap = {
	low: Priorities.low,
	mid: Priorities.mid,
	high: Priorities.high,
};

function getCryptoPriority(cryptoName: string) {
	const priority = localStorage.getItem(`${CRYPTO_KEY}${cryptoName}`);
	return prioritiesMap[priority] ?? Priorities.low;
}
