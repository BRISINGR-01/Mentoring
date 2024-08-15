// Used to handle problems that should stop the function/program

function dangerousCode() {
	if (hasProblem) throw new Error("Oh no!");

	// code...
}

try {
	dangerousCode();
} catch (error) {
	if (error.message === "Oh no!") {
		console.log("Don't do that!");
	}
}
