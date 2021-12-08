# def reduce(arr, acc)
#   arr.each { |item|
#     acc += item
#   }
#   return acc
# end

# p reduce([1,3,5], 0) #=> 9
# # p reduce(['red', 'leather', 'yellow', 'leather'], 0) #=> 'redleatheryellowleather'

def reduce(arr, acc, &block)
  arr.each { |item|
    yiels block
  }
  return acc
end

p reduce([1,3,5], 0, { puts '!!!!!!!!!!!!' }) #=> 9
# p reduce(['red', 'leather', 'yellow', 'leather'], 0) #=> 'redleatheryellowleather'