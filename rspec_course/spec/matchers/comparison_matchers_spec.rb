RSpec.describe 'comparison matchers' do
  it 'allows for comparison with built-in ruby operators' do
    expect(10).to be > 5
    expect(6).to be < 15

    expect(1).to be >= -1
    expect(1).to be >= 1

    expect(22).to be <= 100
    expect(22).to be <= 22

  end

  describe 100 do # passing an object to desribe automatically makes the passed in object the subject
    it { is_expected.to be > 90 }
    it { is_expected.to be >= 100 }
    it { is_expected.to be < 900 }
    it { is_expected.to be <= 100 }
    it { is_expected.not_to be > 105 }
  end
end
