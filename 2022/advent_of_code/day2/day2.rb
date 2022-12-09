@opponent_throw_dict = {
  'A' => 'rock',
  'B' => 'paper',
  'C' => 'scissors'
}

@my_throw_dict = {
  'X' => 'rock',
  'Y' => 'paper',
  'Z' => 'scissors'
}

@throw_values = {
  'rock' => 1,
  'paper' => 2,
  'scissors' => 3
}

@outcome_values = {
  'loss' => 0,
  'draw' => 3,
  'win' => 6
}

def outcome(round)
  opponent_throw = @opponent_throw_dict[round[0]]
  my_throw = @my_throw_dict[round[1]]

  return 'draw' if opponent_throw == my_throw

  return 'win' if opponent_throw == 'rock' && my_throw == 'paper'

  return 'win' if opponent_throw == 'paper' && my_throw == 'scissors'

  return 'win' if opponent_throw == 'scissors' && my_throw == 'rock'

  'loss'
end

def round_score(round)
  @throw_values[@my_throw_dict[round[1]]] + @outcome_values[outcome(round)]
end

def tst
  p @throw_values['rock']
end

my_total_score = 0

file = File.read('/Users/nick.smith/Desktop/code_studies/2022/advent_of_code/day2/day2.txt')
file.each_line do |line|
  round = line.gsub("\n", '').split(' ')
  my_total_score += round_score(round)
end

p my_total_score
