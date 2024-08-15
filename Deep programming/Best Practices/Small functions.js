function calculateTickets(show, date, count) {
	// Define the base price for different shows
	const showPrices = {
		"The Phantom of the Opera": 80,
		Hamilton: 120,
		"The Lion King": 100,
		Wicked: 90,
	};

	// Define special discounts based on the date
	const specialDiscounts = {
		"2024-12-25": 0.15, // 15% discount on Christmas
		"2024-01-01": 0.1, // 10% discount on New Year's Day
	};

	// Define additional fees (e.g., weekend surcharge)
	const weekendSurcharge = 0.1; // 10% surcharge on weekends

	// Check if the show exists
	if (!showPrices[show]) {
		return "Invalid show name.";
	}

	// Calculate the base cost
	let baseCost = showPrices[show] * count;

	// Check for a special discount on the date
	if (specialDiscounts[date]) {
		const discount = specialDiscounts[date];
		baseCost -= baseCost * discount;
	}

	// Parse the date to check if it's a weekend
	const parsedDate = new Date(date);
	const dayOfWeek = parsedDate.getDay(); // 0 for Sunday, 6 for Saturday

	// Apply weekend surcharge if it's a Saturday or Sunday
	if (dayOfWeek === 0 || dayOfWeek === 6) {
		baseCost += baseCost * weekendSurcharge;
	}

	return `Total cost for ${count} ticket(s) to ${show} on ${date} is $${baseCost.toFixed(2)}.`;
}

/* -------------------------------------------------------------------------------------------------------------- */

const SHOW_PRICES = {
	"The Phantom of the Opera": 80,
	Hamilton: 120,
	"The Lion King": 100,
	Wicked: 90,
};

const SPECIAL_DISCOUNTS = {
	"2024-12-25": 0.15, // 15% discount on Christmas
	"2024-01-01": 0.1, // 10% discount on New Year's Day
};

const WEEKEND_SURCHARGE = 0.1; // 10% surcharge on weekends

function getShowPrice(show) {
	return SHOW_PRICES[show] || null;
}

function getSpecialDiscount(date) {
	return SPECIAL_DISCOUNTS[date] || 0;
}

function isWeekend(date) {
	const parsedDate = new Date(date);
	const dayOfWeek = parsedDate.getDay();

	return dayOfWeek === 0 || dayOfWeek === 6;
}

function applyDiscount(baseCost, discount) {
	return baseCost - baseCost * discount;
}

function applySurcharge(baseCost, surcharge) {
	return applyDiscount(baseCost, -surcharge);
}

function printCost(show, date, count, cost) {
	console.log(`Total cost for ${count} ticket(s) to ${show} on ${date} is $${cost.toFixed(2)}.`);
}

function calculateTickets(show, date, count) {
	const showPrice = getShowPrice(show);
	if (!showPrice) return "Invalid show name.";

	let cost = showPrice * count;

	if (cost > 20) console.log("too expensive");

	const discount = getSpecialDiscount(date);
	cost = applyDiscount(cost, discount);

	if (isWeekend(date)) {
		cost = applySurcharge(cost, WEEKEND_SURCHARGE);
	}

	printCost(show, date, count, cost);
}
