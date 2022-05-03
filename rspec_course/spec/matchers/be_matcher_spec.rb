# the only falsy values in ruby and false and nil
# all other values are truthy

RSpec.describe '' do
  it 'can be tested for truthiness' do
    expect(true).to be_truthy
    expect('true').to be_truthy
    expect(5).to be_truthy
    expect(5.5).to be_truthy
    expect(0).to be_truthy
    expect(-5).to be_truthy
    expect(-5.5).to be_truthy
    expect([]).to be_truthy
    expect([false,2]).to be_truthy
    expect({}).to be_truthy
    expect(:symbol).to be_truthy
  end

  it 'can be tested for falsiness' do
    expect(false).to be_falsy
    expect(nil).to be_falsy
    expect(true).not_to be_falsy
  end

  it 'can test explicitly for nil' do
    expect(nil).to be_nil
    my_hash = { a: 4, b: true, c: false }
    expect(my_hash[:a]).to be_truthy
    expect(my_hash[:a]).not_to be_falsy

    expect(my_hash[:b]).to be_truthy
    expect(my_hash[:b]).not_to be_falsy

    expect(my_hash[:c]).to be_falsy
    expect(my_hash[:c]).not_to be_nil

    expect(my_hash[:d]).to be_nil
  end
end
