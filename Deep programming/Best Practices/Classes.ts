const userName = "Гошо";
const id = 432;

const user = {
	id,
	userName,
	asString() {
		return `${userName} (${id})`;
	},
	isBulgarian() {
		return userName.match(/^[\u0400-\u04FF]+$/) !== null;
	},
};

class User {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	toString() {
		return `${this.name} (${this.id})`;
	}

	isBulgarian() {
		return this.name.match(/^[\u0400-\u04FF]+$/) !== null;
	}
}

const user2 = new User(id, userName);

console.log(user);
console.log(user2);
