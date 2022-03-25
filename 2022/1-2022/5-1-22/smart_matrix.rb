$matrix = Array.new(8).map{|row| Array.new(8).map{|cell| []}}

$matrix.each_with_index{|row, rowidx|
  row.each_with_index{|cell, colidx|
    $matrix[rowidx][colidx] = [
      [rowidx, colidx + 1],
      [rowidx + 1, colidx + 1],
      [rowidx + 1, colidx],
      [rowidx + 1, colidx - 1],
      [rowidx, colidx - 1],
      [rowidx - 1, colidx - 1],
      [rowidx - 1, colidx],
      [rowidx - 1, colidx + 1]
    ]
  }
}

def print_matrix
  $matrix.each{|row|
    p row
  }
end

print_matrix