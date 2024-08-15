import { Priorities } from "./code";

export default class DB {
	execute(statement: string) {
		// call db...
		return Priorities.high;
	}
}
