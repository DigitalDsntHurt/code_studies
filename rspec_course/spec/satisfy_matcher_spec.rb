RSpec.describe 'satisfy matcher' do
  subject { 'racecar' }

  it 'is a plindrome' do
    expect(subject).to satisfy { |value| value == value.reverse }
  end

  it 'can expect a custom error message' do
    expect(subject).to satisfy('be a palindrome') { |value| value == value.reverse }
  end

  it 'can expect a custom error message' do
    expect(subject).to satisfy('be a palindrome') do |value|
      value == value.reverse
    end
  end

  it { is_expected.to satisfy(){ |value| value == value.reverse } }
end