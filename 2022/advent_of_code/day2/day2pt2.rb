@throw_dict = {
  'A' => 'rock',
  'B' => 'paper',
  'C' => 'scissors'
}

@outcome_dict = {
  'X' => 'loss',
  'Y' => 'draw',
  'Z' => 'win'
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

@win_values = {
  'rock' => 'paper',
  'paper' => 'scissors',
  'scissors' => 'rock'
}

@loss_values = {
  'rock' => 'scissors',
  'paper' => 'rock',
  'scissors' => 'paper'
}

# input : opponent throw
# intput : round outcome
# output : my throw

def get_my_throw(opponent_throw, round_outcome)
  return @loss_values[opponent_throw] if round_outcome == 'loss'

  return @win_values[opponent_throw] if round_outcome == 'win'

  opponent_throw
end

def outcome(round)
  opponent_throw = @throw_dict[round[0]]
  round_outcome = @outcome_dict[round[1]]
  my_throw = get_my_throw(opponent_throw, round_outcome)

  return 'draw' if opponent_throw == my_throw

  return 'win' if opponent_throw == 'rock' && my_throw == 'paper'

  return 'win' if opponent_throw == 'paper' && my_throw == 'scissors'

  return 'win' if opponent_throw == 'scissors' && my_throw == 'rock'

  'loss'
end

def round_score(round)
  @throw_values[@throw_dict[get_my_throw(round[0], round[1])]] + @outcome_values[outcome(round)]
end

my_total_score = 0

file = File.read('/Users/nick.smith/Desktop/code_studies/2022/advent_of_code/day2/day2.txt')
file.each_line do |line|
  round = line.gsub("\n", '').split(' ')
  my_total_score += round_score(round)
end

p my_total_score
