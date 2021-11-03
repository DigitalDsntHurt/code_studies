# module MyEnumerable
#   def my_reduce(acc, operator = nil, &block)
#     raise ArgumentError, 'both operator and actual block given' if operator && block
#     raise ArgumentError, 'either operator or block must be given' unless operator || block
#     # if no block, create a lambda from the operator (symbol)

#   end
# end

# DOES NOT WORK
# my_nasty_lambda = -> (num, str) do
#   p num * num
#   p "this is my #{str} on drugs"
# end
# my_nasty_lambda(3, 'ruby brain')

# DOES NOT WORK
# my_nasty_lambda = -> (num, str) {
#   p num * num
#   p "this is my #{str} on drugs"
# }
# my_nasty_lambda(3, 'ruby brain')