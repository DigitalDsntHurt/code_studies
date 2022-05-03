class ProfessionalWrestler
  attr_reader :name, :finishing_move

  def initialize(name, finishing_move)
    @name = name
    @finishing_move = finishing_move
  end
end

RSpec.describe 'have_attributes matcher' do
  describe ProfessionalWrestler.new('Stone cold Steve Austin', 'Stunner') do
    it 'checks for object attributes and proper values' do
      expect(subject).to have_attributes({ name: 'Stone cold Steve Austin' })
      expect(subject).to have_attributes({ finishing_move: 'Stunner' })
      expect(subject).to have_attributes({ name: 'Stone cold Steve Austin', finishing_move: 'Stunner' })
      expect(subject).to have_attributes(name: 'Stone cold Steve Austin', finishing_move: 'Stunner') # in ruby if last arg is an object we can omit curly braces
    end

    it { is_expected.to have_attributes(name: 'Stone cold Steve Austin') }
  end
end
