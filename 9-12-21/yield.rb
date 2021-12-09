class Person
  def initialize(name)
    @name = name
  end

  def do_something_with_name
    yield(@name)
  end
end

nooks = Person.new('Nooks')
enzo = Person.new('Enzo')

nooks.do_something_with_name { |name|
  puts 'This dog\'s name is ' + name
}

enzo.do_something_with_name { |name|
  puts 'But this dog\'s name is ' + name
}

enzo.do_something_with_name { |name|
  puts name + ' backwards is ' + name.reverse
}

nooks.do_something_with_name do |name|
  puts name + ' has ' + name.length.to_s + ' letters'
end

# block = { |string| puts string.capitalize }
# nooks.do_something_with_name(block)

puts "========\n========\n"

# def math_bragger(arg1, arg2, block)
#   puts "I took in #{arg1} and #{arg2} and calculated: " + yield(arg1, arg2).to_s
# end

# math_bragger(6, 6, { |a, b| return a * b })


def math_bragger(n1, block)
  puts n1.to_s
  yield block

  puts 'done executing this method'
end

# math_bragger(9)
math_bragger(8, { puts "yielded to block"})