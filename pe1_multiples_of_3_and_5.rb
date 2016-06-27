# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

def is_multiple_of_3?(num)
	num % 3 === 0
end

def is_multiple_of_5?(num)
	num % 5 === 0
end

def sum_multiples_of_3_and_5_below(int)
	sum = 0

	(0...int).each do |num|
		if (is_multiple_of_3?(num) || is_multiple_of_5?(num))
			sum += num
		end
	end
	return sum
end