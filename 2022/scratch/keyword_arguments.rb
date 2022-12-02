# more here: https://www.ombulabs.com/blog/ruby/learning/methods-arguments-ruby-part2.html

#
## POSITIONAL ARGUMENTS
#
=begin
def my_method(arg1, arg2)
  puts "this is arg1: #{arg1}"
  puts "this is arg2: #{arg2}"
end
my_method # without arguments throws an error
#=> wrong number of arguments (given 0, expected 2) (ArgumentError)

def my_method(arg1, arg2)
  puts "this is arg1: #{arg1}"
  puts "this is arg2: #{arg2}"
end
my_method("won", "tew") # with arguments all good
#=> this is arg1: won
#=> this is arg2: tew


#
## default values
#
def my_method(arg1="won", arg2="tew")
  puts "this is arg1: #{arg1}"
  puts "this is arg2: #{arg2}"
end
my_method # setting default parameter values
# allows us to avoid throwing the error when
# we don't pass in arguments
#=> this is arg1: won
#=> this is arg2: tew


def my_method(arg1="won", arg2="tew")
  puts "this is arg1: #{arg1}"
  puts "this is arg2: #{arg2}"
end
my_method("srsly1")
#=> this is arg1: srsly1
#=> this is arg2: tew
=end

#
## KEYWORD ARGUMENTS
#
# Keyword arguments use hash syntax and allow us to pass in arguments in any order
def my_method(arg1:)
  puts "arg1 is #{arg1}"
end

#my_method # calling keyword argument methods without arguments throws an error
#=> missing keyword: arg1 (ArgumentError)

#my_method("check me out") # calling keyword argument methods as you would with
# normal positional arguments throws an error
#=> wrong number of arguments (given 1, expected 0; required keyword: arg1) (ArgumentError)

#my_method(arg1: "definitely it") # the argument needs to be an actual valid ruby hash
#=> this is definitely it

# this gets more interesting where we have multiple arguments that we can call in any order
def complicated_method(arg1:, arg2:)
  puts "arg1 is #{arg1}"
  puts "arg2 is #{arg2}"
end

# these return the same
complicated_method(arg1: "one", arg2: "two")
complicated_method(arg2: "two", arg1: "one")
