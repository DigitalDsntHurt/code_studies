gridSize = 10
squares = [" ", "M"]
GRID = Array.new(gridSize).map{ Array.new(gridSize).map{ squares.sample }}

def numNeighbors(grid, x, y)
  neighbors = 0

  # north
  if grid[y-1][x] == "M"
    neighbors += 1
  end
  # east
  if grid[y][x+1] == "M"
    neighbors += 1
  end
  # south
  if grid[y+1][x] == "M"
    neighbors += 1
  end
  # west
  if grid[y][x-1] == "M"
    neighbors +=1
  end

  neighbors
end

def updateGrid
  growthThreshold = [2,3]
  GRID.map.with_index{|row, rowIdx|
    row.map{|cell, colIdx|
      growthThreshold.include?(numNeighbors(GRID, colIdx, rowIdx)) ? "M" : " "
    }
  }
end

def printGrid
  GRID.each{|row| p row}
end

100.times {
  printGrid
  updateGrid
  sleep(0.1)
}

# printGrid