# def my_map(arr)
#   new_arr = []
#   arr.each{ |el|
#     new_el = yield(el)
#     new_arr << new_el
#   }
#   new_arr
# end

# def my_map(arr)
#   new_arr = []
#   arr.each{ |el|
#     new_arr << yield(el)
#   }
#   new_arr
# end

# p my_map([1,3,5,7,9]){ |num| num - num }
# #=> [0, 0, 0, 0, 0]
# p my_map(['now', 'i', 'whisper']){ |s| s === 'whisper' ? 'YELL' : s.upcase }.join(' ')
# #=> NOW I YELL

puts "==== ==== MY_MAP FUNCTIONAL ==== ===="
class Array
  def my_map
    return self.dup unless block_given?

    arr = []
    self.each{|el|
      arr << yield(el)
    }
    return arr
  end
end

# p [1,3,5,7,9].my_map{ |num| num - num }
# #=> [0, 0, 0, 0, 0]
# p ['now', 'i', 'whisper'].my_map{ |s| s === 'whisper' ? 'YELL' : s.upcase }.join(' ')
# #=> NOW I YELL

numbers = [1,3,5,7,9]
mynums = numbers.my_map
puts "#{mynums} looks a lot like #{numbers} but they're not the same as evidenced by #{mynums.object_id} != #{numbers.object_id}"
numbers.my_map # =>[1,3,5,7,9]
# p numbers # =>[1,3,5,7,9]
zeros = numbers.my_map{ |num| num - num }
p numbers # =>[1,3,5,7,9]
p zeros # => [0, 0, 0, 0, 0]

puts
talker = ['now', 'i', 'whisper']
screamer = talker.my_map{ |s| s === 'whisper' ? 'YELL' : s.upcase }.join(' ')
p talker #=> ['now', 'i', 'whisper']
p screamer #=> NOW I YELL


puts "==== ==== MY_MAP! IN PLACE ==== ===="
class Array
  def my_map!
    # return self.dup unless block_given?

    self.each_with_index{ |el, i|
      self[i] = yield(el)
    }
  end
end

numbers = [1,3,5,7,9]
p numbers # => [1,3,5,7,9]
numbers.my_map!{ |num| num - num }
p numbers # => [0, 0, 0, 0, 0, ]

puts

talker = ['now', 'i', 'whisper']
p talker # => ['now', 'i', 'whisper']
talker.my_map!{ |s| s === 'whisper' ? 'YELL' : s.upcase }
p talker.join(' ') # => NOW I YELL