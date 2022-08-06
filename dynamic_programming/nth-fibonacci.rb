# https://www.interviewcake.com/question/javascript/nth-fibonacci

def fib(n)
  raise ArgumentError, "Index was negative. No such thing as a negative index in a series." if n < 0

  # # Uses extra array space O(N) time and space
  # sequence = [0, 1]
  # for i in 2..n do
  #   sequence[i] = sequence[i - 1] + sequence[i - 2]
  # end
  # sequence[n]


  # # Recursive, O(2^n) time, O(1) space
  # if n == 0 || n == 1
  #   return n
  # else
  #   return fib(n - 1) + fib(n - 2)
  # end


  # # Recursive with memoization
  # memo = {}
  # if n == 0 || n == 1
  #   return n
  # elsif memo.include?(n)
  #   return memo[n]
  # else
  #   result = fib(n - 1) + fib(n - 2)
  #   memo[n] = result
  #   return result
  # end


  # # iteration, temp variables
  # if n == 0 || n == 1
  #   return n
  # end
  # one = 0
  # two = 1
  # (n - 1).times do
  #   one, two = two, one + two
  # end
  # two

  # iteration 2 - O(n) time, O(1) space
  return n if n <= 1
  one = 0
  two = 1
  (n).times do
    temp = one
    one = one + two
    two = temp
  end
  one

end












# Tests

def run_tests
  desc = 'zeroth fibonacci'
  actual = fib(0)
  expected = 0
  assert_equal(actual, expected, desc)

  desc = 'first fibonacci'
  actual = fib(1)
  expected = 1
  assert_equal(actual, expected, desc)

  desc = 'second fibonacci'
  actual = fib(2)
  expected = 1
  assert_equal(actual, expected, desc)

  desc = 'third fibonacci'
  actual = fib(3)
  expected = 2
  assert_equal(actual, expected, desc)

  desc = 'fifth fibonacci'
  actual = fib(5)
  expected = 5
  assert_equal(actual, expected, desc)

  desc = 'tenth fibonacci'
  actual = fib(10)
  expected = 55
  assert_equal(actual, expected, desc)

  desc = 'negative fibonacci'
  assert_raises(desc) { fib(-1) }
end

def assert_equal(a, b, desc)
  puts "#{desc} ... #{a == b ? 'PASS' : "FAIL: #{a.inspect} != #{b.inspect}"}"
end

def assert_raises(desc)
  yield
  puts "#{desc} ... FAIL"
rescue
  puts "#{desc} ... PASS"
end

run_tests
