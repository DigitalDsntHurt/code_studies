fully_contained_assignment_pairs = 0

def are_completely_overlapping?(pair_one, pair_two)
  return true if pair_one[0] >= pair_two[0] && pair_one[1] <= pair_two[1]

  return true if pair_two[0] >= pair_one[0] && pair_two[1] <= pair_one[1]

  false
end

file = '2022/advent_of_code/day4/day4.txt'
File.open(file).each_line do |line|
  assignment = line.strip.split(',').map { |text_range| text_range.split('-').map(&:to_i) }
  pair_one = assignment[0]
  pair_two = assignment[1]

  fully_contained_assignment_pairs += 1 if are_completely_overlapping?(pair_one, pair_two)
end

p fully_contained_assignment_pairs

## first guess 341 -- too low
