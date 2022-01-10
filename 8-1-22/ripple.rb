$grid = []

8.times do |n|
  $grid << []
end

def print_grid
  $grid.each{|row| p row }
end

print_grid