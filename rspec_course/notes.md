# From Testing Ruby With Rspec course on Udemy

https://www.udemy.com/course/testing-ruby-with-rspec/learn/lecture/12409324?start=15#content

testing is writing ruby code that tests that other ruby code works as expected

## Sumaries

### The `describe` Method

Initiate RSpec tests with

```
RSpec.describe 'name of test subject' do
  ...tests here
end
```

RSpec.describe can accept a string or a Class as an argument. If provided a class, it automatically instantiates a new instance of that class with Class.new and assigns it the variable name subject

```
RSpec.describe Array do
  # subject = Array.new
  .. tests here allowed to use subject variable even though it hasn't been explicitly defined
end
```

### The `it` method

The `it` method in rspec defined example groups

```
RSpec.describe Array do
  it 'tests some set of behaviors' do
    ... test assertions go here
  end
end
```

### The `expect` and `eq` methods

The `expect` and `eq` methods are the backbone of writing assertions in RSpec

```
RSpec.describe Array do
  it 'tests some set of behaviors' do
    expect(Array.length).to eq(0)
  end
end
```

### `before` and `after` hooks

### Reducing duplication... variables + helpers

### Reducing duplication... the `let` method

The `let` method is typically the preferred way in rspec to reduce code duplication while minimizing data polution between example groups

### Custom error methods

### The context method, nested describes, nested before and after hooks

### Overwriting let variables within nested logic

### Implicit subject

### Explicit subject

### `described_class` helper

allows our code to be super flexible. allows us to change the names of classes while minimizing the amound of test code syntax we need to update

### one-liner syntax

### shared examples

allows super dry code when testing multiple objects and object classes that all respond to the same interfaces

```
RSpec.shared_example 'name of shared example' do
  it 'tests stuff' do
    expect(subject.thing).to eq(expectation)
  end
end

RSpec.describe OneClass do
  include_examples('name of shared example')
end

RSpec.describe TwoClass do
  include_examples('name of shared example')
end
```

### shared context

<br><br>

### Course Notes

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

### implicit subject

```
RSpec.desribe Hash do
  let(:subject) { Hash.new }

end
```

In the code above, as in all rspec tests, providing a Class argument to `RSpec.describe` triggers RSpec to run the line `let(:subject) { NamedClass.new }` as the first line of the example group.

This is syntactic sugar that removes the need for a ton of boilerplate.

So long as a class instance can be instantiated with Class.new keyword, this automagic works well.
