class Card
  attr_reader :value, :suit

  def initialize(value, suit)
    @value = value
    @suit = suit
  end
end

RSpec.describe Card do
  it 'has a suit' do
    card = Card.new('', 'Clubs')
    expect(card.suit).to eq('Clubs')
  end

  it 'has a value' do
    card = Card.new('Jack', '')
    expect(card.value).to eq('Jack')
  end
end
