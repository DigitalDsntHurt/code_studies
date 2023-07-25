# Gusto TPA : https://github.com/Gusto/interview_questions/tree/main/technical_skills_assessments/key_value_store

## Implement a Key-Value Store with simple add, get, and delete functions

=begin
class KeyValueStore
  def initialize
    @self = {}
  end

  def add(key, value)
    @self[key] = value
  end

  def get(key)
    @self[key]
  end

  def delete(key)
    @self.delete(key)
  end
end

# initialize
store = KeyValueStore.new
p store

# add
store.add("foo", "bar")
p store

# get
p store.get("key") #=> nil
p store.get("foo") #=> "bar"

# delete
p store.delete("foo") #=> "bar"
p store
=end

## We now want to add some advanced functionality to our key value store: 
## keeping track of historical values. Modify the Key-Value Store to keep track of previous values for a given key. 
## Specifically, we want to implement a function get_at_effective_date that takes a key and a specific time, 
## and returns the value for the key at the specified point in time.

require 'date'
require 'pry'

class KeyValueStore
  def initialize
    @self = Hash.new([])
  end

  def add(key, value)
    @self[key] = @self[key] << [value, DateTime.now]
  end

  def get(key)
    binding.pry
    @self[key] || nil
  end

  def delete(key)
    @self.delete(key)
  end
end

# initialize
puts "\n INITIALIZE"
store = KeyValueStore.new
p store

# add
puts "\n ADD Riley"
store.add("Riley", "CA")
store.add("Riley", "MI")

# puts "\n ADD Babs"
# store.add("Barbara", "AK")

p store
p store.get("")
# p store.get("")
# p store["Riley"]
# p store["Barbara"]

# get
# puts "\n GET"
# p store
# p store.get("Barbara") #=> nil
# p store.get("Riley") #=> "Riley"

# delete
# puts "\n DELETE"
# store.delete("foo") #=> "bar"
# p store