$mind = Array.new(10).map{|row| Array.new(4).map{|cell| "  "}}

$thoughts = [
  {name: 'last night\'s dream', initial_force: 1, persistence: 3 },
  {name: 'the Seguins', initial_force: 3, persistence: 3 },
  {name: 'promotion at work', initial_force: 2, persistence: 8 },
  {name: 'therapy tonight', initial_force: 5, persistence: 5 },
]

def seed_mind
  $mind.each_with_index do |row, rowidx|
    row.each_with_index do |col, colidx|
      thought = $thoughts[colidx]
      $mind[rowidx][colidx] = "__" if rowidx >= (thought[:initial_force] - $mind.length).abs
    end
  end
end

def play_mind
  # each column in mind needs to vary eveyr iteration
  # depending on each thought's persistence, it should be more or less likely the column value goes up or down
end

def print_mind
  $mind.each{|row| p row }
end

seed_mind
print_mind