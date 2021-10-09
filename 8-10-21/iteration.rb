puts "\n==== ==== ==== ====\n"
puts "13. Use Ruby's Array method delete_if and String method start_with? to delete all of the strings that begin with an 's' in the following array."

arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']
arr.delete_if{ |s| s.start_with?('s') }
p arr # [winter, ice, white trees]

puts "\n13.a. Then recreate the arr and get rid of all of the strings that start with 's' or starts with 'w'."
arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']
arr.delete_if{ |s|
  s.start_with?('s') || s.start_with?('w')
}
p arr # [ice]

arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']
arr.delete_if{ |s| s.start_with?'s' or s.start_with?'w' }
p arr # [ice]

puts "\n==== ==== ==== ====\n"
puts "14. Take the following array and turn it into a new array that consists of strings containing one word. (ex. ['white snow', etc...] → ['white', 'snow', etc...]. Look into using Array's map and flatten methods, as well as String's split method."
a = ['white snow', 'winter wonderland', 'melting ice', 'slippery sidewalk', 'salted roads', 'white trees']
a.map!{ |s| s.split(' ') }.flatten!
p a

puts "\n==== ==== ==== ====\n"
puts "15. What will the following program output?"
hash1 = {shoes: "nike", "hat" => "adidas", :hoodie => true}
hash2 = {"hat" => "adidas", :shoes => "nike", hoodie: true}

if hash1 == hash2
  puts "These hashes are the same!"
else
  puts "These hashes are not the same!"
end

puts "These hashes are the same!"

puts "\n==== ==== ==== ====\n"
puts "16. Challenge: In exercise 11, we manually set the contacts hash values one by one. Now, programmatically loop or iterate over the contacts hash from exercise 11, and populate the associated data from the contact_data array. Hint: you will probably need to iterate over ([:email, :address, :phone]), and some helpful methods might be the Array shift and first methods. Note that this exercise is only concerned with dealing with 1 entry in the contacts hash, like this:\n
contact_data = ['joe@email.com', '123 Main st.', '555-123-4567']\n
contacts = {'Joe Smith' => {}}"

puts "~~v ANSWER using each.with_index v~~"
contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"]]
contacts = {"Joe Smith" => {}}
keys = [:email, :address, :phone]
hsh = contacts["Joe Smith"]
keys.each.with_index do |key, idx|
  hsh[key] = contact_data[0][idx]
end
p contacts # {'Joe Smith' => {email: "joe@email.com", address: "123 Main st.", phone: "555-123-4567" }}
puts "~~^ ANSWER ^~~"


puts "~~v ANSWER using shift and first v~~"
contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"]]
contacts = {"Joe Smith" => {}}
[:email, :address, :phone].each{ |key|
  contacts["Joe Smith"][key] = contact_data[0].first
  contact_data[0].shift
}
p contacts # {'Joe Smith' => {email: "joe@email.com", address: "123 Main st.", phone: "555-123-4567" }}
puts "~~^ ANSWER ^~~"
# contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
# contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

puts "\n==== ==== ==== ====\n"
puts "BONUS. see if you can figure out how to make #16 work with multiple entries in the contacts hash."