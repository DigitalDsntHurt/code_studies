class Bottles
  def initialize
    @verse_num = 99
  end

  def verse(verse_num)
    @verse_num = verse_num
    next_verse = @verse_num == 0 ? 99 : verse_num - 1

    "#{bottles_text(@verse_num, true)} of milk on the wall, " +
    "#{bottles_text(@verse_num)} of milk.\n" +
    imperative +
    "#{bottles_text(next_verse)} of milk on the wall.\n"
  end

  def bottles_text(bottle_count, cap = false)
    if bottle_count == 0 && cap
      return "No more bottles"
    end

    if bottle_count == 0 && !cap
      return "no more bottles"
    end

    if bottle_count == 1
      return bottle_count.to_s + " bottle"
    end

    bottle_count.to_s + " bottles"
  end

  def article
    if @verse_num == 1
      return "it"
    end

    "one"
  end

  def imperative
    if @verse_num == 0
      return "Go to the store and buy some more, "
    end

    return "Take #{article} down and pass it around, "
  end

end
