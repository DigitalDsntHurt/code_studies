def my_method(number)
  yield number
end

my_method(88) { |num| puts "i LOVE #{num}"} # i LOVE 88

my_method(88) { |num| puts num - 30 * 3 } # 150
# the above is a problem. i expect to get 150 but instead i get -2
# my_method(88) { |num| puts (num - 30) * 3 } # 150
# the above throws an undefined local variable or method `num' for main:Object nameError
# okay, so it turns out i don't understand ruby block scoped variables
# let's make a note to come back to this and continue

# my_method(88) # `my_method': no block given (yield) (LocalJumpError)

# the point is that above we need to invoke my_method with a block if we use yield in the definition

#
# block_given?
def my_method(number)
  yield number if block_given?
end
my_method(88)

# block_given? allows us to conditionally call the block only if one is provided at invocation time

# arguments
def meth_with_args(arg1, arg2)
  both = [arg1, arg2]
  yield arg1
  yield arg2
  yield both
end

meth_with_args('foo', 'baz'){ |thing| p thing }
#=> foo
#=> baz
#=> ['foo', 'baz']

def meth_with_args(arg1, arg2)
  both = [arg1, arg2]
  yield (arg1, arg2, both)
  # yield arg2
  # yield both
end

meth_with_args('foo', 'baz'){ |thing1, thing2, thing3| puts "#{thing1}, #{thing2}, #{thing3}" }
#=> foo
#=> baz
#=> ['foo', 'baz']

# return values