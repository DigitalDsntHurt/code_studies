RSpec.describe 'raise_error matcher' do
  def some_method
    x
  end

  # class CustomError < StandardError
  # end

  class CustomError < StandardError; end

  # it 'can check for any error' do
  #   expect { some_method }.to raise_error
  # end

  it 'can check for a specific error being raised' do
    expect { some_method }.to raise_error(NameError)
    # expect { 3 / 0 }.to raise_error(NameError) # fails
    expect { 3 / 0 }.to raise_error(ZeroDivisionError)
  end

  it 'can check for a custom error' do
    expect { raise CustomError }.to raise_error(CustomError)
  end
end
