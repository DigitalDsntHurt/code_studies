
def middle_nums(num)
  num = num.to_s
  # if num.length % 2 == 0
  # puts "#{num} has even number of digits"
  if num.length == 4
    # puts "#{num} has 4 digits"
    # puts "middle nums are #{num[1..2]}"
    # puts "middle num is 17 #{num[1..2]}" if num[1..2] == '17'
    # puts num[1..2]
    return num[1..2] if num[1..2] == '17'
  end
  # false
end

def thirteen_head?(num)
  return true if num.to_s[0..1] == '13'
end

num = 0
10000.times do
  # puts num

  # if middle_nums(num)
  #   puts middle_nums(num)
  # end


  num += 1
end

