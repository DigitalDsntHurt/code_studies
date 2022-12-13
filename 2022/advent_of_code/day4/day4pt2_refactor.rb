overlapping_pairs = 0

def are_overlapping?(range_1, range_2)
  return true if range_2.first >= range_1.first && range_2.first <= range_1.last

  return true if range_2.last >= range_1.first && range_2.last <= range_1.last

  return true if range_1.first >= range_2.first && range_1.first <= range_2.last

  return true if range_1.last >= range_2.first && range_1.last <= range_2.last

  false
end

# data = ARGF.map(&:strip).map { |line| line.split(',') }
#   .map { |first_pair, second_pair| [first_pair.split('-').map(&:to_i), second_pair.split('-').map(&:to_i)] }
data = ARGF.map(&:strip).map { |line| line.split(',') }.map { |line| line.map { |pair| pair.split('-').map(&:to_i) } }
data.each { |first, second| overlapping_pairs += 1 if are_overlapping?(first, second)}
p overlapping_pairs

# rewrite it as a reduce
# data.reduce { |sum, line| sum + 1 if are_overlapping?(line[0], line[1]) }
