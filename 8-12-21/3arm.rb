=begin

control          -- 45 -- 45 -- xx
variation        -- 45 -- 55 -- 82
random variation -- 10 -- xx -- 18

-------- -------- -------- --------

100 people
  c  -- 45
  v  -- 45
  rv -- 10

-------- -------- -------- --------

100 people
  OUTER
    c - 45
    v - 55
  INNER
    c - 45
    v - 10

-------- -------- -------- --------

OUTER
45 = ? / 100 * 100
   = 45 / 100 * 100
   = 45
55 = ? / 100 * 100
   = 55 / 100 * 100
   = 55

INNER
45 = ? / 100 * 55
   = 45 / 55 * 100
   = 81.81
10 = ? / 100 * 55
   = 10 / 55 * 100
   = 18.18

SO THE (rounded) PERCENTAGES ARE
OUTER
c  -- 45
v  -- 55

INNER
v  -- 82
rv -- 18

now. how do we generalize?

start with known percentages
arm1 - a1%
arm2 - a2%
arm3 - a3%

end with
outer - c
outer - v
inner - c
inner - v

steps to reproduce
  1. calculate outer experiment values
    oc (given)      = a1%
    ov (calculated) = 100 - a1%
  2. calculate inner experiment values
    ic (calculated) = a2% / ov * 100
    oc (calculated) = 100 - ic

=end

puts "Enter control percentage..."
control = gets.chomp
puts "Enter variation percentage..."
variation = gets.chomp
puts "Enter random variation percentage..."
random_variation = gets.chomp

$experiment_arms = {
  control: control.to_f,
  variation: variation.to_f,
  random_variation: random_variation.to_f,
}

def sums_to_100?
  $experiment_arms.values.reduce{ |val, sum| val + sum  } == 100
end

def generate_experiment_splits
  if !sums_to_100?()
    puts "Your experiment arms don't sum to 100"
    $experiment_arms.keys.each{ |k|
      puts "\t#{k}: #{$experiment_arms[k]}"
    }
    return
  else
    oc = $experiment_arms[:control]
    ov = 100 - oc
    ic = $experiment_arms[:variation] / ov * 100
    iv = 100 - ic
    puts ""
    puts "Experiment arms sum to 100. Let's go..."
    puts "\nOuter Experiment Splits : "
    puts "\t CONTROL            : #{oc.round}%"
    puts "\t VARIATION          : #{ov.round}%"

    puts "\nInner Experiment Splits : "
    puts "\t VARIATION        : #{ic.round}%"
    puts "\t RANDOM VARIATION : #{iv.round}%"
    return
  end
end

generate_experiment_splits