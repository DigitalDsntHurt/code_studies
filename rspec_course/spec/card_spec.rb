class Card
  attr_accessor :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end
end

# # descibe can take string as argument or actual Class constant
# # RSpec.describe 'Card' do
# RSpec.describe Card do
#   # specify 'has a type' do # `specify` is an alias for `it`
#   it 'has a rank and a suit' do
#     card = Card.new('Ace', 'Spades')
#     # expect(card.type).to(eq('Ace of Spades')) # equivalent to below
#     # expect(card.type).to eq('Ace of Spades')
#     expect(card.rank).to eq('Ace')
#     expect(card.suit).to eq('Spades')
#   end
# end

# RSpec.describe Card do
#   it 'has a rank' do
#     card = Card.new('Jack', 'Clubs')
#     expect(card.rank).to eq('Jack')
#   end

#   it 'has a suit' do
#     card = Card.new('Jack', 'Clubs')
#     expect(card.suit).to eq('Clubs')
#   end
# end

# RSpec.describe Card do
#   before do
#     @card = Card.new('Jack', 'Clubs')
#   end

#   # before(:example) do
#   # end

#   it 'has a rank' do
#     # card = Card.new('Jack', 'Clubs')
#     expect(@card.rank).to eq('Jack')
#   end

#   it 'has a suit' do
#     # card = Card.new('Jack', 'Clubs')
#     expect(@card.suit).to eq('Clubs')
#   end
# end

# RSpec.describe Card do
#   before do
#     @card = Card.new('Jack', 'Clubs')
#   end

#   it 'has a rank' do
#     expect(@card.rank).to eq('Jack')
#   end

#   it 'has a suit' do
#     expect(@card.suit).to eq('Clubs')
#   end
# end

# RSpec.describe Card do

#   def card
#     Card.new('Jack', 'Clubs')
#   end

#   # before do
#   #   @card = Card.new('Jack', 'Clubs')
#   # end

#   it 'has a rank' do
#     expect(card.rank).to eq('Jack')
#   end

#   it 'has a suit' do
#     expect(card.suit).to eq('Clubs')
#   end
# end

=begin
The problem with this approach is that in the first example group
we actually invoke the card method three times,
creating three seprate cards
none of which are ever committed to memory
=end
# RSpec.describe Card do
#   def card
#     Card.new('Jack', 'Clubs')
#   end

#   # before do
#   #   @card = Card.new('Jack', 'Clubs')
#   # end

#   it 'has a rank and that rank can change' do
#     expect(card.rank).to eq('Jack')
#     card.rank = 'Queen'
#     expect(card.rank).to eq('Queen')
#   end

#   it 'has a suit' do
#     expect(card.suit).to eq('Clubs')
#   end
# end

=begin
the let construct in rspec is a tool for eliminating code duplication in our tests
let runs once before each example group and memoizes its evaluation,
allowing you to work with coherent objects within example groups
but not have to worry about data pullution between example groups

let is also lazy loaded, so it doesnt run until each example group is evaluated
this is super efficient if we have a spec with hundreds of example groups

let bang let! is more like before, it doesnt lazy load
=end
RSpec.describe Card do
  let(:card) { Card.new('Jack', 'Clubs') }

  it 'has a rank and that rank can change' do
    expect(card.rank).to eq('Jack')
    card.rank = 'Queen'
    expect(card.rank).to eq('Queen')
  end

  it 'has a suit' do
    expect(card.suit).to eq('Clubs')
  end

  it 'has a custom error message' do
    card.suit = 'nonsense'
    comparison = 'Clubs'
    expect(card.suit).to eq(comparison), "Hey, i expected #{comparison} but got #{card.suit} instead!"
  end
end
