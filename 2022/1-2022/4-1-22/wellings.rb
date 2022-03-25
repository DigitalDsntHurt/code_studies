$mind = Array.new(8).map{|region| Array.new(8).fill("o") }

MIND_OBJECTS = ["X", "Y", "Z", "8", "9", "4", "^", "~"]

def fill_mind
  $mind = $mind.map{|region| region.map{|space| MIND_OBJECTS.sample }}
end

def clear_mind
  $mind = $mind.map{|region| region.map{|space| "o" }}
end

def show_mind
  $mind.each{|region| p region }
  puts ""
end


=begin
def ripple_right

end
  00
  10, 01
  20, 11, 01

=end

def get_random_mind_space
  x = rand($mind.length)
  y = rand($mind.length)

  {
    x: x,
    y: y,
    object: $mind[x][y],
  }
end

def is_plus_or_minus_1(n,m)
  # n == m + 1 || n == m - 1
  (n - m).abs == 1
end

def is_plus_or_minus_1_or_2(n,m)
  # n == m + 1 || n == m - 1
  (n - m).abs == 1 || (n - m).abs == 2
end

def get_all_adjascent_mind_spaces(obj)
  adjascent_spaces = [
    [obj[:x] - 1, obj[:y] - 1],
    [obj[:x] - 1, obj[:y]],
    [obj[:x] - 1, obj[:y] + 1],
    [obj[:x], obj[:y] - 1],
    [obj[:x], obj[:y] + 1],
    [obj[:x] + 1, obj[:y] - 1],
    [obj[:x] + 1, obj[:y]],
    [obj[:x] + 1, obj[:y] + 1],
  ]
  adjascent_spaces
  # $mind.each_with_index{|region, rowidx|
  #   region.each_with_index{|space, colidx|
  #     # if (obj[:x] == rowidx && (obj[:y] == colidx + 1 || obj[:y] == colidx - 1)) || ((obj[:x] == rowidx + 1 || obj[:x] == rowidx - 1) && obj[:y] == colidx)
  #     #   p [rowidx, colidx]
  #     # end
  #     if (obj[:x] == rowidx && is_plus_or_minus_1_or_2(obj[:y], colidx)) || (is_plus_or_minus_1_or_2(obj[:x], rowidx) && obj[:y] == colidx)
  #       p [rowidx, colidx]
  #     end
  #   }
  # }

  # origin = [6,2]
  #          [5,2]
  #          [5,3]
  #          [6,3]
  #          [7,3]
  #          [7,2]
  #          [7,1]
  #          [6,1]
  #          [5,1]

  #          if (x = x && y = y +/- 1) || (x = x +/- 1 && y = y)
end
# p get_all_adjascent_mind_spaces({x: 6, y: 2})

def random_well

end

def flicker
  fill_mind
  show_mind
  epicenter = get_random_mind_space
  circle = get_all_adjascent_mind_spaces(epicenter)

  100.times do
    circle.each{|x, y|
      $mind[x][y] = epicenter[:object]
    }
    show_mind

    sleep 0.25

    circle.each{|x, y|
      $mind[x][y] = "o"
    }
    show_mind

    sleep 0.25
  end
end

flicker

# p get_random_mind_space
# fill_mind
# p get_random_mind_space

# show_mind
# fill_mind
# show_mind
# clear_mind
# show_mind