interface Repository {
	getUserById(id: string): string;
}

class DBRepository implements Repository {
	getUserById(id: string) {
		// get data from database
		// validate user
		return "user";
	}
}

class LocalStorageRepository implements Repository {
	getUserById(id: string) {
		const users = JSON.parse(localStorage.users);

		return users.find((user) => user.id === id);
	}
}

/* -------------------------------------------------------------------------------------------------------------- */

// "High-level modules should depend on abstractions rather than concrete implementations"

// `High-level modules` - logic that should be free of dependencies - `Business logic` (reusable, important, movable, lightly coupled) - sendData
// `should depend on` - use
// `abstractions` - generic interface|function|... that hides the implementation details - Repository
// `rather than concrete implementations` - instead of specific code - DBRepository, LocalStorageRepository

// ex: validateData should not know it uses a database, but still get the data from it

// UI -> Logic -> Database
function validateData(id: string) {
	const repository = new DBRepository();

	const user = repository.getUserById(id);

	// validate
	// log
	// send data to server
	// ...
}

// UI -> Logic <- Database
function validateData2(id: string, repository: Repository) {
	const user = repository.getUserById(id);

	// validate
	// log
	// send data to server
	// ...
}

validateData2("123", new DBRepository());
validateData2("123", new LocalStorageRepository());

const mockForTest = {
	getUserById: () => "",
};

validateData2("123", mockForTest);
