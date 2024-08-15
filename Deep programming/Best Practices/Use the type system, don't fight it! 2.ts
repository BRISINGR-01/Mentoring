// `toIterable` is an example of "Polymorphism" - it uses abstraction to allow any data structure to be used in the same way.

// P.S iteration is going through every element of something (array, keys of an object, etc.)
// iterable is something that can be iterated (ex: we can use `for of`)

import { MAX_SUM } from "./Use the type system, don't fight it!";

interface IteratorLike<T> {
	toIterable(): Array<T>;
}

class Product {
	price: number;
}

class ProductList extends Array<Product> implements IteratorLike<Product> {
	toIterable() {
		return this;
	}
}

class ProductMap extends Map<string, Product> implements IteratorLike<Product> {
	toIterable() {
		const arr = [];
		for (const key in this) {
			arr.push(this[key]);
		}

		return arr;
	}
}

class ProductFromServer implements IteratorLike<Product> {
	toIterable() {
		// call server...
		return [];
	}
}

function best(data: IteratorLike<Product>) {
	let sum = 0;

	for (const el of data.toIterable()) {
		sum += el.price;
	}

	return sum > MAX_SUM;
}

best(new ProductList());
best(new ProductMap());
best(new ProductFromServer());
