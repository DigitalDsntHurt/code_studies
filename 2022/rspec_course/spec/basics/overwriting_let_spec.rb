class ProgrammingLanguage
  attr_reader :name

  def initialize(name = 'Ruby')
    @name = name
  end
end

RSpec.describe ProgrammingLanguage do
  let(:language) { ProgrammingLanguage.new('Python') }

  context 'with an initialization argument' do
    it 'should store the name of the language' do
      expect(language.name).to eq('Python')
    end
  end

  context 'with no initialization argument' do
    # language = ProgrammingLanguage.new # this also works
    let(:language) { ProgrammingLanguage.new }

    it "should default to 'Ruby'" do
      expect(language.name).to eq('Ruby')
    end
  end
end
