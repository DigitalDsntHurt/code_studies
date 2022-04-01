RSpec.describe 'Card' do
  # specify 'has a type' do # `specify` is an alias for `it`
  it 'has a type' do
    card = Card.new('Ace of Spades')
    # expect(card.type).to(eq('Ace of Spades')) # equivalent to below
    expect(card.type).to eq('Ace of Spades')
  end
end

class Card
  attr_reader :type

  def initialize(type)
    @type = type
  end
end
