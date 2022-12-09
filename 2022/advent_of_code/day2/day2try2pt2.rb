@throw_cypher = {
  'A' => 'rock',
  'B' => 'paper',
  'C' => 'scissors'
}

@throw_scores = {
  'rock' => 1,
  'paper' => 2,
  'scissors' => 3
}

@outcome_cypher = {
  'X' => 'loss',
  'Y' => 'draw',
  'Z' => 'win'
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

@loses_to_dict = {
  'rock' => 'paper',
  'paper' => 'scissors',
  'scissors' => 'rock'
}

def decypher_throw(letter)
  @throw_cypher[letter]
end

def calculate_necessary_throw(round)
  opponent_throw = @throw_cypher[round[0]]
  round_outcome = @outcome_cypher[round[1]]

  return @defeats_dict[opponent_throw] if round_outcome == 'loss'

  return @loses_to_dict[opponent_throw] if round_outcome == 'win'

  opponent_throw
end

def my_round_outcome(round)
  opponent_throw = decypher_throw(round[0])
  my_throw = calculate_necessary_throw(round)

  return 'win' if @defeats_dict[my_throw] == opponent_throw

  return 'draw' if opponent_throw == my_throw

  'loss'
end

def calculate_round_score(round)
  round_score = @outcome_scores[my_round_outcome(round)]
  throw_score = @throw_scores[calculate_necessary_throw(round)]
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
