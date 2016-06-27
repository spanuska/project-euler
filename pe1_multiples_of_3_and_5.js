// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function is_multiple_of_3(num) {
	return num % 3 === 0
}

function is_multiple_of_5(num) {
	return num % 5 === 0
}

function sum_multiples_of_3_and_5_below(int) {
	var sum = 0
	for (var i = 0; i < int; i++) {
		if (is_multiple_of_3(i) || is_multiple_of_5(i)) {
			sum += i
		}	
	}
	return sum;
}