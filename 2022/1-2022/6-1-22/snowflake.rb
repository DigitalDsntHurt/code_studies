$landscape = Array.new(22).map{|row| Array.new(8).map{|cell| " " }}

def random_column
  rand(8)
end

# def clear_landscape
#   $landscape = $landscape.each{|row| row.map{|cell| " " }}
# end

def which_flake(n)
  if n % 2 == 0
    "x"
  else
    "+"
  end
end

def oscilate(start_col)
  if start_col == 7
    [-1,-1,0,0,0].sample
  elsif start_col == 0
    [0,0,0,1,1].sample
  else
    [-1,0,0,0,1].sample
  end
end

def single_flake_fall
  start_location = random_column
  location = start_location
  elevation = 0
  while elevation < $landscape.length
    # $landscape[elevation][location] = "x"
    $landscape[elevation][location] = which_flake(elevation)
    print_landscape
    $landscape[elevation][location] = " "
    elevation += 1
    if location != start_location
      location = start_location
    else
      location += oscilate(start_location)
    end
    # location =  ? start_location : += oscilate
    sleep(0.3)
  end
  $landscape[elevation - 1][location] = " "
  print_landscape
end

def print_landscape
  $landscape.each{|row|
    p row
  }
  puts
end

# print_landscape
single_flake_fall