# PART 1
# file = File.open('/Users/nick.smith/Desktop/code_studies/2022/advent_of_code/day1/day1.txt')
# largest_elf_calorie_store = 0

# current_elf_calorie_store = 0
# file.each_line do |line|
#   clean_line = line.gsub("\n", "")
#   if clean_line == ""
#     largest_elf_calorie_store = current_elf_calorie_store if current_elf_calorie_store > largest_elf_calorie_store
#     current_elf_calorie_store = 0
#     next
#   end

#   current_elf_calorie_store += clean_line.to_i
# end

# p largest_elf_calorie_store

# PART 2
file = File.open('/Users/nick.smith/Desktop/code_studies/2022/advent_of_code/day1/day1.txt')
largest_3_elf_calorie_stores = [0, 0, 0]

current_elf_calorie_store = 0
file.each_line do |line|
  clean_line = line.gsub("\n", '')
  if clean_line == ''
    if current_elf_calorie_store > largest_3_elf_calorie_stores.min
      largest_3_elf_calorie_stores[largest_3_elf_calorie_stores.index(largest_3_elf_calorie_stores.min)] = current_elf_calorie_store
    end

    current_elf_calorie_store = 0
    next
  end

  current_elf_calorie_store += clean_line.to_i
end

p largest_3_elf_calorie_stores.sum
