RSpec.describe "before and after hooks" do
  # before(:context) do
  #   puts 'before context'
  # end

  # before(:example) do
  #   puts 'before example'
  # end

  # before do
  #   puts 'before example'
  # end

  after(:example) do
    puts 'after example'
  end

  after(:context) do
    puts 'after context'
  end

  it 'is just a random example' do
    expect(8 - 0).to eq(8)
  end

  it 'is just another random example' do
    expect(8 * 1).to eq(8)
  end
end
