# puts "\n==== ==== ==== ====\n"
# puts "16. Challenge: In exercise 11, we manually set the contacts hash values one by one.
#   Now, programmatically loop or iterate over the contacts hash from exercise 11,
#   and populate the associated data from the contact_data array.
#   Hint: you will probably need to iterate over ([:email, :address, :phone]), and some helpful methods might be the
#   Array shift and first methods. Note that this exercise is only concerned with dealing with 1 entry in the contacts hash,
#   like this:\n
# contact_data = ['joe@email.com', '123 Main st.', '555-123-4567']\n
# contacts = {'Joe Smith' => {}}"

# puts "~~v ANSWER using each.with_index v~~"
# contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"]]
# contacts = {"Joe Smith" => {}}
# keys = [:email, :address, :phone]
# hsh = contacts["Joe Smith"]
# keys.each.with_index do |key, idx|
#   hsh[key] = contact_data[0][idx]
# end
# p contacts # {'Joe Smith' => {email: "joe@email.com", address: "123 Main st.", phone: "555-123-4567" }}
# puts "~~^ ANSWER ^~~"


# puts "~~v ANSWER using shift and first v~~"
# contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"]]
# contacts = {"Joe Smith" => {}}
# [:email, :address, :phone].each{ |key|
#   contacts["Joe Smith"][key] = contact_data[0].first
#   contact_data[0].shift
# }
# p contacts # {'Joe Smith' => {email: "joe@email.com", address: "123 Main st.", phone: "555-123-4567" }}
# puts "~~^ ANSWER ^~~"
# # contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
# # contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

puts "\n==== ==== ==== ====\n"
puts "BONUS. see if you can figure out how to make #16 work with multiple entries in the contacts hash."


# MY SOLUTION
# contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
# contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}
# fields = [:email, :address, :phone]

# # iterate over contacts hash
# contacts.each do |k, v|
#   # based on the current contact key name, select the correct entry in the contacts_data array
#   contact = contact_data.select{ |contact_arr| contact_arr[0].split('@')[0] == k.split(' ')[0].downcase }[0]
#   # p k
#   # p v
#   # p contact
#   # iterate over the inner / person array with index
#   contact.each.with_index do |entry, idx|
#     # add to the curent contact value hash a k/v pair with key coming from fields array and value coming from inner / person array. use index to match
#     v[fields[idx]] = entry
#   end

# end

# # print contacts
# p contacts

# EXERCISE SOLUTION
contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}
fields = [:email, :address, :phone]

contacts.each_with_index do |(name, hash), idx|
  fields.each do |field|
    hash[field] = contact_data[idx].shift
  end
end

p contacts