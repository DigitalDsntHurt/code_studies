puts "\n==== ==== ==== ===="
puts "1. Use the each method of Array to iterate over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], and print out each value."
originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
originalArray.each{ |num|
  p num
}
puts "\n==== ==== ==== ===="
puts "2. Same as above, but only print out values greater than 5."
puts "__using .each and if"
originalArray.each{ |num|
  p num if num > 5
}
puts "\n==== ==== ==== ====\n"
puts "3. Now, using the same array from #2, use the select method to extract all odd numbers into a new array."
oddsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].select{ |num| num % 2 != 0 }
p oddsArray
puts "\n==== ==== ==== ====\n"
puts "4. Append 11 to the end of the original array. Prepend 0 to the beginning."
originalArray.push(11).unshift(0)
p originalArray
puts "\n==== ==== ==== ====\n"
puts "5. Get rid of 11. And append a 3."
originalArray.pop
originalArray.push(3)
p originalArray
puts "\n==== ==== ==== ====\n"
puts "6. Get rid of duplicates without specifically removing any one value."
originalArray.uniq!
p originalArray
puts "\n==== ==== ==== ====\n"
puts "7. What's the major difference between an Array and a Hash?"
puts "~ Arrays are ordered lists. Hashes are unordered."
puts "\n==== ==== ==== ====\n"
puts "8. Create a Hash, with one key-value pair, using both Ruby syntax styles."
hsh1 = {key: 'value'}
hsh2 = Hash.new()
hsh2[:key] = 'value'
p hsh1
p hsh2
puts "\n==== ==== ==== ====\n"
puts "9. Suppose you have a hash h = {a:1, b:2, c:3, d:4}\n1. Get the value of key `:b`.\n2. Add to this hash the key:value pair `{e:5}`\n3. Remove all key:value pairs whose value is less than 3.5"
h = { a:1, b:2, c:3, d:4 }
p h[:b]
h[:e] = 5
p h
newh = h.reject{ |k,v| v < 3.5 }
p newh
puts "\n==== ==== ==== ====\n"
puts "10. Can hash values be arrays? Can you have an array of hashes? (give examples)"
puts "Yes: "
hsh_of_arrays = {arr: [1, 2, 3, 4], str: 'im a string'}
p hsh_of_arrays
array_of_hashes = [{arr: [1, 2, 3, 4], str: 'im a string'}, {arr: [1, 2, 3, 4], str: 'im a string'}]
p array_of_hashes
puts "\n==== ==== ==== ====\n"
puts "11. Given the following data structures, write a program that copies the information from the array into the empty hash that applies to the correct person."
contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

def match(email, contacts)
  fname = email.split('@')[0]
  contacts.each do |k, v|
    if k.downcase.split(' ')[0] == fname
      return k
    end
  end
end

contact_data.each do |contact|
  # p contact
  # p contacts
  # p match(contact[0], contacts)
  # p contacts[match(contact[0], contacts)]
  # puts "**"
  hsh = contacts[match(contact[0], contacts)]
  hsh[:email] = contact[0]
  hsh[:address] = contact[1]
  hsh[:phone] = contact[2]
end

p contacts

puts "\n==== ==== ==== ====\n"
puts "12. Using the hash you created from the previous exercise, demonstrate how you would access Joe's email and Sally's phone number."

p contacts["Joe Smith"][:email]
p contacts["Sally Johnson"][:phone]