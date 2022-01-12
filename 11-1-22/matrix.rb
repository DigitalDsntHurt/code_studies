$matrix = []

def build_matrix
  (0..8).each do |rowidx|
    row = []
    (0..8).each do |colidx|
      row << [rowidx, colidx]
    end
    $matrix << row
  end
end

def list_all_adjascents(row, col)

  [
    [row - 1, col - 1],
    [row, col - 1],
    [row + 1, col - 1],

    [row - 1, col + 1],
    [row, col + 1],
    [row + 1, col + 1],

    [row - 1, col - 1],
    [row - 1, col],
    [row - 1, col + 1],

    [row + 1, col - 1],
    [row + 1, col],
    [row + 1, col + 1],
  ].uniq
end

def print_matrix
  $matrix.each{|row| p row}
end

build_matrix
print_matrix