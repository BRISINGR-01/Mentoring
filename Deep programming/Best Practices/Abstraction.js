/* Abstraction is when we hide the details and expose only how to use the feature:
ex: The details of how we save data are hidden in the `saveToDB` and `saveToLocalStorage` function.
	  `updateCount` only knows that it can save something somewhere and doesn't care where, just how to pass the data.

NB: passing a function/class like that (pass `dataSaver` to updateCountAbstract) is called "Dependeny Injection"
You "inject" a function/class with the details (dependency)
*/

function updateCount(data) {
	data["count"] += 1;

	if (isOnline) {
		saveToDB(data);
	} else {
		saveToLocalStorage(data);
	}
}

/* ---------------------------------------------------------------------------------------------------- */

/**
 * @param {Object} data
 * @param {(data: Object) => void} dataSaver
 */
function updateCountAbstract(data, dataSaver) {
	data["count"] += 1;

	dataSaver(data);
}

function saveToDB(data) {
	// send data
}

function saveToLocalStorage(data) {
	for (const key in data) {
		localStorage[key] = data[key];
	}
}

/* ---Usage----------------------------------------------------------------------------------------------- */

if (isOnline) {
	updateCount(data, saveToDB);
} else {
	updateCount(data, saveToLocalStorage);
}
