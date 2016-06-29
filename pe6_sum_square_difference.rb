# The sum of the squares of the first ten natural numbers is,
# 1^2 + 2^2 + ... + 102 = 385
# The square of the sum of the first ten natural numbers is,
# (1 + 2 + ... + 10)^2 = 552 = 3025
# Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

def sum_squares_of_numbers_up_to(max_number)
	squares = (1..max_number).map do |num|
		num * num
	end
	return squares.inject(&:+)
end

def square_sum_of_numbers_up_to(max_number)
	sum = (1..max_number).inject(&:+)
	return sum * sum
end

def difference_between_sum_squares_and_square_sums_up_to(max_number)
	return square_sum_of_numbers_up_to(max_number) - sum_squares_of_numbers_up_to(max_number)
end