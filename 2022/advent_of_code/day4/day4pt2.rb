overlapping_pairs = 0


def are_overlapping?(range_1, range_2)

  return true if range_2.first >= range_1.first && range_2.first <= range_1.last

  return true if range_2.last >= range_1.first && range_2.last <= range_1.last

  return true if range_1.first >= range_2.first && range_1.first <= range_2.last

  return true if range_1.last >= range_2.first && range_1.last <= range_2.last

  false
end

file = '2022/advent_of_code/day4/day4.txt'
File.open(file).each_line do |line|
  assignment = line.strip.split(',').map { |text_range| text_range.split('-').map(&:to_i) }
  pair_one = assignment[0]
  pair_two = assignment[1]

  overlapping_pairs += 1 if are_overlapping?(pair_one, pair_two)
end

p overlapping_pairs

# rewrite it as a reduce
