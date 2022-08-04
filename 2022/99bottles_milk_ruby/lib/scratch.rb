input = [2,0]
# p input ##=> [2, 0]
# p input.max
# p input.min

# p (input.max..input.min) ##=> 2..0
# (input.max..input.min).each{|i| p i } ##=> does NOT work

# p (input.max..input.min).to_a ##=> []
# p Array((input.max..input.min)) ##=> []

# r = (input.max..input.min)
# p r
# p r.to_a
# afr = r.to_a
# p afr
# (10..15).each {|n| print n, ' ' }
# (10..15).each {|n| print n }
# (10..15).each {|n| puts n }
# p (10..15)
# (10..15).each {|n| p n }
# p (input.max..input.min)
# p (input.max..input.min).class
# (input.max..input.min).each {|n| p n }
# max = input.max
# min = input.min
# (min..max).each{ |n| p n }


# AHA!!! the problem is that ruby ranges don't like reverse
input.max.downto(input.min).each{ |i| p i }
puts '---'
p input
puts '---'
p (input.min..input.max)
puts '---'
(input.min..input.max).each{|i| p i }
puts '---'
(input.min..input.max).to_a.each{|i| p i }
puts '---'
(input.min..input.max).to_a.reverse.each{|i| p i }
