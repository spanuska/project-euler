// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function makeRange(start, stop, step) { // from _.js
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
};

function get_range(max_number) {
  return makeRange(1, max_number + 1); // +1 makes the range inclusive of the max_number
}

function sum_squares_of_nums_in(array_of_nums) {
	var sum = 0;
	for (var i = 0; i < array_of_nums.length; i++) {
		sum += array_of_nums[i] * array_of_nums[i]
	}
  return sum;
}

function square_sum_of_nums_in(array_of_nums) {
	var sum_of_nums = array_of_nums.reduce(function(prev, curr){
  	return prev + curr
  });
  return sum_of_nums * sum_of_nums;
}

var max_number = 100;
var range_of_nums = get_range(max_number);
var sum_of_squares = sum_squares_of_nums_in(range_of_nums);
var square_of_sum = square_sum_of_nums_in(range_of_nums);
var difference = square_of_sum - sum_of_squares;
console.log(difference);