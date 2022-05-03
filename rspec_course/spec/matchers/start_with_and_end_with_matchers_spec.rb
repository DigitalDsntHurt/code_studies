RSpec.describe 'start with and end with matchers' do
  describe 'caterpillar' do
    it 'should check for a substring at the beginning or end' do
      expect(subject).to start_with('cat')
      expect(subject).to end_with('pillar')
    end

    it { is_expected.to start_with('c') }
    it { is_expected.to end_with('ar') }
  end

  describe [:a, :b, :c, :d] do
    it 'should check for elements at start and end of array' do
      expect(subject).to start_with(:a)
      expect(subject).to start_with(:a, :b)
      expect(subject).to start_with([:a, :b])
      expect(subject).to end_with(:d)
      expect(subject).to end_with(:c, :d)
      expect(subject).to end_with([:c, :d])
    end

    it { is_expected.to start_with(:a) }
    it { is_expected.to end_with(:b, :c, :d) }
    it { is_expected.to end_with([:d]) }
  end
end
