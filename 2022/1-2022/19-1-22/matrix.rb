$matrix = Array.new(8).map{|row| Array.new(8).map{|col| " "} }

def print_matrix
  for row in $matrix
    p row
  end
end

def get_coords
  $matrix.each_with_index{|row, rowidx|
    row.each_with_index{|cell, colidx|
      $matrix[rowidx][colidx] = [rowidx, colidx]
    }
  }
end

def get_surroundings
end

get_coords
print_matrix