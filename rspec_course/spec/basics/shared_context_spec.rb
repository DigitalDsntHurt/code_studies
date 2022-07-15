RSpec.shared_context 'common name of context' do
  before do
    @foods = []
  end

  def some_helper_method
    5
  end

  let(:some_variable) { [1, 2, 3] }
end

RSpec.describe "first example group" do
  include_context 'common name of context'

  it 'can use outside instance variables' do
    expect(@foods.length).to eq(0)
    @foods.push('sushi')
    expect(@foods.length).to eq(1)
  end

  it 'can reuse an instance variable across different examples' do
    expect(@foods.length).to eq(0)
  end

  it 'can use shared helpers' do
    expect(some_helper_method).to eq(5)
  end

end

RSpec.describe "first example group" do
  include_context 'common name of context'

  it 'can use shared let variables' do
    expect(some_variable).to eq([1, 2, 3])
  end
end