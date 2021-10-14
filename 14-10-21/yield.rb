class Meal
  include Enumerable
  attr_accessor :appetizer, :entree, :dessert

  def initialize(appetizer, entree, dessert)
    self.appetizer = appetizer
    self.entree = entree
    self.dessert = dessert
  end

  def each
    yield appetizer
    yield entree
    yield dessert
  end
end

m = Meal.new('avo toast', 'flautas', 'cake')
p m

m.each do |course|
  p course
end

m.each do |course|
  p ['i love ', 'i hate '].sample + course
end

puts '==== ==== ==== ==== '
def method_with_yield(string, modifier)
  yield string
end

p method_with_yield('ruby', {s.capitalize})