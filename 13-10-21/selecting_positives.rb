# select all positives
a = [-5, 10, 0, 15, -2]
pos = []
a.each{|n|
  pos << n if n >=0
}
p pos
p a.select{ |n| n >= 0 }
p a.select(&:positive?)

# learn about .positive?, .negative?, .zero?, nonzero? in ruby
p 10.positive?
p 0.positive?
p -4.positive?
puts
p 10.negative?
p 0.negative?
p -4.negative?
puts
p 10.zero?
p 0.zero?
p -4.zero?
puts
p 10.nonzero?
p 0.nonzero?
p -4.nonzero?