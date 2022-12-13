file = '/Users/nick.smith/Desktop/code_studies/2022/advent_of_code/day3/day3.txt'

def find_common_item(group)
  group[0].each_char do |char|
    return char if group[1].include?(char) && group[2].include?(char)
  end
end

def get_item_priority(item)
  item_priorities = ('a'..'z').to_a + ('A'..'Z').to_a
  item_priorities.index(item) + 1
end
# p get_item_priority('r') # 18
# p get_item_priority('Z') # 52
priorities_sum = 0
current_group = []
File.open(file).each_line do |line|
  current_group << line.gsub("\n", '')

  if current_group.length > 2
    priorities_sum += get_item_priority(find_common_item(current_group))
    current_group = []
  end
end

p priorities_sum