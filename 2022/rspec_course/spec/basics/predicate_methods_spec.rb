RSpec.describe 'predicate methods and predicate matchers' do
  it 'can be tested with Ruby methods' do
    result = 16 / 2
    expect(result.even?).to eq(true)
  end

  it 'can be tested with predicate matchers' do
    result = 16 / 2
    expect(result.even?).to be(true) # passes
    expect(result.even?) # passes
    expect(16 / 2).to be_even # passes
    # the above is rspec automagic
    # when we are using a ruby predicate method in rspec
    # all we need to do is
    # - remove the question mark from the end of the predicate method name
    # - prepend the predicate method name with be_
    # and then rspec knows how to invoke the predicate method in our tests with this syntactic shorthand
    # any predicate method that exists on an object in ruby
    # will be available as a predicate matcher on that object in rspec

    expect(15).to be_odd
    expect(0).to be_zero
    expect([]).to be_empty
  end

  describe 0 do
    it { is_expected.to be_zero }
    it { is_expected.to be_even }
  end
end
