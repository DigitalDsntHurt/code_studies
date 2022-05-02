RSpec.describe 'include matcher' do
  describe 'hot chocolate' do
    it 'checks for substring includion' do
      expect(subject).to include('hot')
      expect(subject).to include('late')
      expect(subject).to include(' choc')
    end

    it { is_expected.to include 'ot ch' }
  end

  describe [10, 20, 30] do
    it 'checks for inclusion in the array, regardless of order' do
      expect(subject).to include(20)
      expect(subject).to include(20, 10)
    end

    it { is_expected.to include(30, 10) }
  end

  describe({ a: 2, b: 4 }) do
    it 'can check for key existence' do
      expect(subject).to include(:a)
      expect(subject).to include(:b)
      expect(subject).to include(:a, :b)
      expect(subject).to include(:b, :a)
      expect(subject).to include(:a, :b, :a)
    end

    it { is_expected.to include(:b, :a) }

    it 'can check for key-value pairs' do
      expect(subject).to include(a: 2)
    end

    it { is_expected.to include(b: 4, a: 2) }
  end
end