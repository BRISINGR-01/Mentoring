// data can be an Array of products or a Object of products
function unsafe(data) {
	let sum = 0;

	if (Array.isArray(data)) {
		for (const el of data) {
			sum += el.price;
		}
	} else {
		for (const key in data) {
			sum += data[key].pice;
		}
	}

	return sum > 12;
}

type Product = { price: number }; //					   ex: { price: 1 }
class ProductList extends Array<Product> {} //	 ex: [ { price: 1 }, { price: 2 } ]
type ProductMap = { [key: string]: Product }; // ex: { "a: { price: 1 }, "b": { price: 2 } }

function safe(data: ProductList | ProductMap) {
	let sum = 0;

	if (data instanceof ProductList) {
		for (const el of data) {
			sum += el.price;
		}
		return;
	}

	for (const key in data) {
		sum += data[key].price;
	}

	return sum > 12;
}

export const MAX_SUM = 12;

function better(data: ProductList | ProductMap) {
	let sum = 0;

	for (const el of toList(data)) {
		sum += el.price;
	}

	return sum > MAX_SUM;
}

function toList(data: ProductMap | ProductList) {
	if (Array.isArray(data)) {
		return data;
	} else {
		return Object.values(data);
	}
}
