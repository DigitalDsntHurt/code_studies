RSpec.describe 'math calculations' do
  it 'does basic math' do
    expect(3 * 3).to eq(9)
    expect(3 - 3).to eq(0)
    expect(3 % 3).to eq(0)
    expect(3 ** 3).to eq(27)
  end
end
