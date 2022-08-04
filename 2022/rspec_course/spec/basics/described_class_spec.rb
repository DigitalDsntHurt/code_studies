class Prince
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

RSpec.describe Prince do
  subject { described_class.new('Boris') }
  let(:lois) { described_class.new('Lois') }

  it 'represents a great person' do
    expect(subject.name).to eq('Boris')
    expect(lois.name).to eq('Lois')
  end
end