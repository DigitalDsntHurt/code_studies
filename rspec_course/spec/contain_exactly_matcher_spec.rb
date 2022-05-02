RSpec.describe 'contain exactly matcher' do
  subject { [1, 2, 3] }

  describe 'long form syntax' do
    it 'should check for th presence of all elements' do
      expect(subject).to contain_exactly(1, 2, 3)
      expect(subject).to contain_exactly(3, 2, 1)
      expect(subject).to contain_exactly(2, 1, 3)

      # expect(subject).to contain_exactly(1, 2)
      # expect(subject).to contain_exactly(1, 2, 3, 4)
    end

    it { contain_exactly(1, 2, 3) }
    it { contain_exactly(3, 2, 1) }
    it { contain_exactly(2, 3, 1) }
  end
end