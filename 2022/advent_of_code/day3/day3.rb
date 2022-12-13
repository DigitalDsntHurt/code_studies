priorities_sum = 0

items = ('a'..'z').to_a + ('A'..'Z').to_a

file = File.open('/Users/nick.smith/Desktop/code_studies/2022/advent_of_code/day3/day3.txt')
file.each_line do |line|
  clean_line = line.gsub("\n", '')
  compartment_size = clean_line.length / 2.0
  top_compartment = clean_line[0..compartment_size - 1]
  bottom_compartment = clean_line[compartment_size..-1]

  top_compartment.each_char do |char|
    if bottom_compartment.include?(char)
      priorities_sum += items.index(char) + 1
      break
    end
  end
end

puts '==== ===='
p priorities_sum
puts '==== ===='
