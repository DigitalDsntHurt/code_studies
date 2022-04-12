# From Testing Ruby With Rspec course on Udemy

https://www.udemy.com/course/testing-ruby-with-rspec/learn/lecture/12409324?start=15#content

testing is writing ruby code that tests that other ruby code works as expected

#### rspec is actually 3 gems

- rspec-core
  - organizes and runs tests
- rspec-expectations
  - syntax for assertions
- rspec-mocks
  - used to fake the behavior of classes and objects

#### in rspec land, a test is known as an example

- a describe block is also called an example group

#### on structuring your tests

`it` blocks should not have very much description. that's what `describe` blocks are for.
so this..

```
RSpec.describe '#even? method' do
  it 'even numbers should return true' do
    expect(8.even?).to eq(true)
  end
end
```

..has too much detail in the it block description. all that additional detail should be moved out to a `describe` block:

```
RSpec.describe '#even? method' do
  describe 'with even number' do
    it 'should return true' do
      expect(8.even?).to eq(true)
    end
  end
end
```

`describe` and `context` are aliases for eachother in rspec
