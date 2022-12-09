@opponent_throws = {
  'A' => 'rock',
  'B' => 'paper',
  'C' => 'scissors'
}

@my_throws = {
  'X' => 'rock',
  'Y' => 'paper',
  'Z' => 'scissors'
}

@throw_scores = {
  'rock' => 1,
  'paper' => 2,
  'scissors' => 3
}

@outcome_scores = {
  'loss' => 0,
  'draw' => 3,
  'win' => 6
}

@defeats_dict = {
  'rock' => 'scissors',
  'paper' => 'rock',
  'scissors' => 'paper'
}

def decypher_opponent_throw(letter)
  @opponent_throws[letter]
end

def decypher_my_throw(letter)
  @my_throws[letter]
end

def my_round_outcome(round)
  opponent_throw = decypher_opponent_throw(round[0])
  my_throw = decypher_my_throw(round[1])

  return 'win' if @defeats_dict[my_throw] == opponent_throw

  return 'draw' if opponent_throw == my_throw

  'loss'
end

def calculate_round_score(round)
  round_score = @outcome_scores[my_round_outcome(round)]
  throw_score = @throw_scores[@my_throws[round[1]]]
  round_score + throw_score
end

def calculate_tournament_score(data)
  point_total = 0

  File.open(data).each_line do |line|
    round = line.gsub("\n", '').split(' ')
    point_total += calculate_round_score(round)
  end

  point_total
end

file_path = '/Users/nick.smith/Desktop/code_studies/2022/advent_of_code/day2/day2.txt'
p calculate_tournament_score(file_path)
