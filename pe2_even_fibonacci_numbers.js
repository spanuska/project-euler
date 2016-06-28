// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

// for node
var max = process.argv[2];

function get_fibonacci_numbers_up_to(max_number) {
	var fib_nums = [1,2];
	var current_num = 0;

	while (current_num < max_number) {
		var fnl = fib_nums.length;
	  current_num = fib_nums[fnl - 1] + fib_nums[fnl - 2];
	 	if (current_num < max_number) { 
	 		fib_nums.push(current_num); 
	 	}
	}
	return fib_nums;
}

function add_even_nums() {
	var fib_nums = get_fibonacci_numbers_up_to(max);
	return fib_nums.filter(function (current_num) {
		return current_num % 2 === 0;
	})
	.reduce(function (p,c) {
		return p + c;
	});
}

console.log(add_even_nums(max));