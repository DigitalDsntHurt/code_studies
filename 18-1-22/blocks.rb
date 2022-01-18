# in ruby we can pass code blocks to methods and execute them within methods using the `yield` keyword

def a_method(num)
  puts "received #{num}"
  yield if block_given?
  puts "finished executing method\n\n"
end

a_method(2)
a_method(8) { puts "block here"}

# we can also pass parameters to yield
def b_method(num)
  puts "received #{num}"
  yield(num) if block_given?
  puts "finished executing method\n\n"
end
b_method(9)
b_method(8) {|num| puts num ** 2}