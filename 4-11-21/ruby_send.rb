module MyEnumerable
  def my_reduce(acc, operator = nil, &block)
    # ensure both operator and block not given
    raise ArgumentError, 'both operator and actual block given' if operator && block
    # ensure either operator or block given
    raise ArgumentError, 'either operator or block must be given' unless operator || block
    # if no block, create a lambda from the operator (symbol)
    block = block || ->(acc, val) { acc.send(operator, value) }
=begin
    here's what i understand about the above
    - declare a new variable name 'block'
    - if there is a block provided as an argument, set the value of the block variable to block
    - otherwise
      - create a lambda that accepts two arguments `acc` and `val`
      ~~ need to understand what is .send in ruby ~~
      - and the lambda's block calls the `operator` on the `acc` variable with `value` as argument, like so
      ```
      acc = 2
      acc.send(:+, 3)
      =
      2.+3
      ```
=end
    end
  end
end