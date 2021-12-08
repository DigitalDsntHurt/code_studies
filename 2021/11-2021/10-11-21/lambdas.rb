# lambdas are in may way similar to methods

def my_function
  puts 'sup my dude'
end

my_function  #=> 'sup my dude'

my_lambda = lambda { puts 'sup my dude' }

my_lambda  #=> nothing happens. we need the .call method to invoke ruby lambdas
my_lambda.call #=> 'sup my dude'

# INVOKE A LAMBDA IN VARIOUS WAYS
my_lambda.call #=> 'sup my dude'
my_lambda.[] #=> 'sup my dude'
my_lambda.() #=> 'sup my dude'
my_lambda.=== #=> 'sup my dude'

# CREATE A LAMBDA WITH THE LITERAL LAMBDA OPERATOR
literal_lambda = -> { puts 66 }
literal_lambda.call #=> 66

# PROVIDE ARGUMENTS TO A PLAIN LAMBDA
argumentative_percentage_lambda = lambda { |x, total| x / total.to_f * 100 }
# p argumentative_percentage_lambda.call #=> wrong number of arguments error
p argumentative_percentage_lambda.call(88, 6448)

# PROVIDE ARGUMENTS TO A LAMBDA LITERAL
# broken_lambda = lambda (a1, a2){ puts a1 + a2 }
# broken_lambda.call(66, 22) #=> error

fixed_lambda = -> (a_dirty_word){ puts "She said " + a_dirty_word }
fixed_lambda.call("a dirty word") #=> "She said a dirty word"

# THE CALL METHOD ACCEPTS AS MANY ARGUMENTS AS ARE DEFINED ON THE LAMBDA
fixed_lambda = -> (a1, a2){ puts a1 + a2 }
fixed_lambda.call(66, 22) #=> 88
# fixed_lambda.call(66) #=> wrong number of args error
# fixed_lambda.call("hello ", "mother ", "man") #=> wrong number of args error

# POVIDE DEFAILT ARGUMENTS TO LAMBDAS
one = lambda { |arg = 'Joshua'| 4.times { p arg + " Calahan" } }
one.call('Marissa') #=> Marissa Calahan
one.call() #=> Joshua Calahan

two = ->(name = "Cookie"){ 4.times { p name + " Kuminga" } }
two.call("Jonathan")
two.call()
