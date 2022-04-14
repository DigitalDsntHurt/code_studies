RSpec.describe Hash do
  # the line below works automagically
  # with Hash as the argument to RSpec.describe
  # let(:subject) { Hash.new }

  it 'should start off empty' do
    expect(subject.length).to eq(0)
  end

  it 'should start off empty and be maleable' do
    expect(subject.length).to eq(0)
    subject[:dog] = 'Nooks'
    expect(subject.length).to eq(1)
  end

  it 'should remain isolated between examples' do
    expect(subject.length).to eq(0)
  end
end