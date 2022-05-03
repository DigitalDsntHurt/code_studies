RSpec.describe Array do 
  it 'does something predictable' do
    expect(subject.length).to eq(0)
    subject.push(88)
    expect(subject.length).to eq(1) 
  end
end
