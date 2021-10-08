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

puts "\n==== ==== ==== ====\n"
puts "13. Use Ruby's Array method delete_if and String method start_with? to delete all of the strings that begin with an 's' in the following array."

arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

puts "Then recreate the arr and get rid of all of the strings that start with 's' or starts with 'w'."

puts "\n==== ==== ==== ====\n"
puts "14. Take the following array and turn it into a new array that consists of strings containing one word. (ex. ['white snow', etc...] → ['white', 'snow', etc...]. Look into using Array's map and flatten methods, as well as String's split method."
a = ['white snow', 'winter wonderland', 'melting ice', 'slippery sidewalk', 'salted roads', 'white trees']

puts "\n==== ==== ==== ====\n"
puts "15. What will the following program output?"
hash1 = {shoes: "nike", "hat" => "adidas", :hoodie => true}
hash2 = {"hat" => "adidas", :shoes => "nike", hoodie: true}

if hash1 == hash2
  puts "These hashes are the same!"
else
  puts "These hashes are not the same!"
end

puts "\n==== ==== ==== ====\n"
puts "16. Challenge: In exercise 11, we manually set the contacts hash values one by one. Now, programmatically loop or iterate over the contacts hash from exercise 11, and populate the associated data from the contact_data array. Hint: you will probably need to iterate over ([:email, :address, :phone]), and some helpful methods might be the Array shift and first methods. Note that this exercise is only concerned with dealing with 1 entry in the contacts hash, like this:\n
contact_data = ['joe@email.com', '123 Main st.', '555-123-4567']\n
contacts = {'Joe Smith' => {}}"

puts "\n==== ==== ==== ====\n"
puts "BONUS. see if you can figure out how to make #16 work with multiple entries in the contacts hash."