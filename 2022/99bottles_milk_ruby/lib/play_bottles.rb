class Bottles
  # def verse(verse_num)
  #   "#{verse_num} bottles of milk on the wall, " +
  #   "#{verse_num} bottles of milk.\n" +
  #   "Take one down and pass it around, " +
  #   "#{verse_num - 1} bottle#{'s' unless verse_num == 2} of milk on the wall.\n"
  # end
  #
  # The solution above is DRYer than the solution below
  # but rushing to DRY out this code before we correctly understand the underlying abstractions
  # obscures the underlying abstractions, possibly preventing us from ever finding them.
  #
  # Specifically, the solution above implies the critical abstraction here is pluralization
  # whereas the repetiton of the word 'bottle(s)' implies the critcal underlying abstraction
  # has to do with the concept of bottles.
  #
  # It is preferable to tolerate some repetition in order to find the correct abstractions

  # def verse(verse_num)
  #   case verse_num
  #   when 0
  #     return "No more bottles of milk on the wall, " +
  #     "no more bottles of milk.\n" +
  #     "Go to the store and buy some more, " +
  #     "99 bottles of milk on the wall.\n"
  #   when 1
  #     return "#{verse_num} bottle of milk on the wall, " +
  #     "#{verse_num} bottle of milk.\n" +
  #     "Take it down and pass it around, " +
  #     "no more bottles of milk on the wall.\n"
  #   when 2
  #     return "#{verse_num} bottles of milk on the wall, " +
  #     "#{verse_num} bottles of milk.\n" +
  #     "Take one down and pass it around, " +
  #     "#{verse_num - 1} bottle of milk on the wall.\n"
  #   else
  #     "#{verse_num} bottles of milk on the wall, " +
  #     "#{verse_num} bottles of milk.\n" +
  #     "Take one down and pass it around, " +
  #     "#{verse_num - 1} bottles of milk on the wall.\n"
  #   end
  # end
  #
  # The solution below is preferable to the solution above because to a naive reader
  # it drives the point home: there are 4 cases and only one of them has any
  # abstraction at all currently implemented
  #
  def verse(verse_num)
    case verse_num
    when 0
      return "No more bottles of milk on the wall, " +
      "no more bottles of milk.\n" +
      "Go to the store and buy some more, " +
      "99 bottles of milk on the wall.\n"
    when 1
      return "1 bottle of milk on the wall, " +
      "1 bottle of milk.\n" +
      "Take it down and pass it around, " +
      "no more bottles of milk on the wall.\n"
    when 2
      return "2 bottles of milk on the wall, " +
      "2 bottles of milk.\n" +
      "Take one down and pass it around, " +
      "1 bottle of milk on the wall.\n"
    else
      "#{verse_num} bottles of milk on the wall, " +
      "#{verse_num} bottles of milk.\n" +
      "Take one down and pass it around, " +
      "#{verse_num - 1} bottles of milk on the wall.\n"
    end
  end

  def verses(start_verse_num, end_verse_num)
    verses = []
    start_verse_num.downto end_verse_num do |verse_num|
      verses.push(verse(verse_num))
    end
    verses.join("\n")
  end
end