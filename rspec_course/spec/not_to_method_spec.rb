RSpec.describe 'not to method' do
  it 'check that two values do not match' do
    expect(5).to eq(5)
    expect(5).not_to eq(4)
  end
end
