# ANY METHOD WILL ACCEPT A BLOCK. YOU CAN PASS A BLOCK TO ANY METHOD.

def mymethod(n)
  puts "Ten plus #{n} is #{10 + n}"
end

mymethod(-2)

def amethod
  puts "this is a method's return val"
end

# amethod({55 % 2}) #=> does not work
# amethod{55 % 2} #=> "this is a method's return val"

# PASSING BLOCKS TO METHODS

# If `yield` is present, you need to pass pass a block into the method's invocation
# def run_my_numbers
#   puts 'processing..'
#   yield
#   puts '..finished!'
# end
# run_my_numbers #=> no block given (yield) error

# Unless you handle the yield inside the method definition with block_given?
def run_my_numbers
  puts 'processing..'
  yield if block_given?
  puts '..finished!'
  puts
end
run_my_numbers

# passing a do/end block to a method
run_my_numbers do
  puts 55 % 2 == 0
end

# passing a {} block to a method
run_my_numbers {
  puts "hello" == 0
}

# USING PARAMETERS WITH YIELD
def do_a_thing
  local_variable = 'secret scoped thing'
  secret_key = 88
  puts "i did thing 1"
  yield(local_variable, 88) if block_given?
  puts "i did the last thing"
  puts
end

do_a_thing
do_a_thing do |st, nm|
  puts "string: #{st}"
  puts "num: #{nm}"
end

# USING METHOD PARAMETERS AND PARAMETERS WITH YIELD
def do_another_thing(num)
  secret_key = num + 88
  puts "i did thing 1"
  yield(secret_key) if block_given?
  puts "i did the last thing"
  puts
end

do_another_thing(-80) do |sck|
  puts "secret calculated key is: #{sck}"
end
# the above is great. we write a method that takes in a number and a block, performs a calculation on the number argument before passing the calculated value to the block via a yield param.