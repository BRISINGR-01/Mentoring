function main() {
	if (isConnected) {
		if (IsAuthorized) {
			if (data.isValid) {
				send(data);
			} else {
				log("Invalid data: " + data);
			}
		} else {
			throw new Error("Not Authorized");
		}
	}
}

/* -------------------------------------------------------------------------------------------------------- */

function main2() {
	if (!isConnected) return;
	if (!IsAuthorized) throw new Error("Not Authorized");
	if (!data.isValid) return log("Invalid data: " + data);

	send(data);
}
