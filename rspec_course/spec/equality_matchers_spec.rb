RSpec.describe 'equality matchers' do
  let(:a) { 3.0 }
  let(:b) { 3 }

  describe 'eq matcher' do
    it 'tests for value and ignores type' do
      expect(a).to eq(3)
      expect(b).to eq(3.0)
      expect(a).to eq(b)
    end
  end

  describe 'eql matcher' do
    it 'tests for value and type' do
      expect(a).not_to eql(3)
      expect(b).not_to eql(3.0)
      expect(a).not_to eql(b)
    end
  end

  describe 'equal and be matcher' do
    let(:c) { [1, 2, 3] }
    let(:d) { [1, 2, 3] }
    let(:e) { c }

    it 'tests for value, type and identity' do
      expect(c).not_to equal(d)
      expect(d).not_to equal(e)
      expect(c).to equal(e)

      # be is an alias for equal
      expect(c).not_to be(d)
      expect(d).not_to be(e)
      expect(c).to be(e)
    end
  end
end
