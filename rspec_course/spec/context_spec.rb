# RSpec.describe '#even? method' do
#   it 'should return true for even numbers' do
#     expect(8.even?).to eq(true)
#   end

#   it 'should return false for odd numbers' do
#     expect(9.even?).to eq(false)
#   end
# end

RSpec.describe '#even? method' do
  describe 'with even number' do
    it 'should return true' do
      expect(8.even?).to eq(true)
    end
  end

  describe 'with odd number' do
    it 'should return false' do
      expect(9.even?).to eq(false)
    end
  end
end