RSpec.describe 'all matcher' do
  let(:arr) { [5, 7, 9] }

  it 'allows for aggregate checks' do
    # arr.each do |item|
    #   expect(item).to be_odd
    # end

    expect(arr).to all(be_odd)
    expect([4, 2, 8]).to all(be_even)
    expect([[], [], []]).to all(be_empty)
    expect([0, 0]).to all(be_zero)
    expect(arr).to all(be < 10)
  end

  describe [5, 7, 9] do
    it { is_expected.to all(be <= 9) }
  end
end
