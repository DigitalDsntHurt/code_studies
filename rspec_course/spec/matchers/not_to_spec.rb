RSpec.describe 'the not_to method' do
  it 'checks for the inverse of a matcher' do
    expect(5).not_to eq(10)
    expect([1, 2, 3]).not_to equal([1, 2, 3])
    expect(2).not_to be_odd
    expect([1, 2, 3]).not_to be_empty

    expect(nil).not_to be_truthy

    expect('Phily').not_to start_with('ph')
    expect('Phily').not_to end_with('ph')

    expect(8).not_to respond_to(:length)

    expect([:a, :b]).not_to include(:d)

    expect { 11 / 3 }.not_to raise_error
  end
end
