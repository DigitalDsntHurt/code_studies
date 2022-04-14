RSpec.describe 'thing' do
  it 'has a default subject' do
    p subject
    expect(subject).to eq('thing')
  end
end

RSpec.describe Array do
  subject { [1, 2] }

  it 'has correct subject' do
   expect(subject).to eq([1, 2])
  end

  it { is_expected.to eq([1,2]) }
end