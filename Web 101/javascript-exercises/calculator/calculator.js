function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce(function(a,b) {
		return a + b;
	},0);
}

function multiply (arr) {
	return arr.reduce(function(a,b) {
		return a * b;
	});
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(num) {
	if(num == 0 || num == 1) {
		return 1;
	}
	return num * factorial(num - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}