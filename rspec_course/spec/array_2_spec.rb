RSpec.describe Array do
  subject(:sally) do
    ['el1', 77]
  end

  it 'has a length of 2' do
    expect(sally.length).to eq(2)
    sally.pop
    expect(sally.length).to eq(1)
  end

  it 'correctly equivocated subject and alias' do
    expect(sally).to eq(subject)
    expect(subject == sally).to eq(true)
  end
end