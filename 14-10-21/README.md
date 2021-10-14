# Code Study - October 14, 2021

## Tool

ruby

## Task

read through and play with this resource : https://www.cloudbees.com/blog/the-enumerable-module

## Purpose

learn about and practice ruby enumerables

## Timebox

20 mins

---

## Reflection

Did not get very far today but in starting to write demo class (Meal and Serving), i realized... i don't understand ruby's yield.

[This resource](https://medium.com/rubycademy/the-yield-keyword-603a850b8921) gave a lucid description:

> When a `block` is recognized by the Ruby parser, it is associated with an invoked method and replaces all the `yield`s in the method definition

for example

```
def method_with_yield(string, modifier)
  yield string
end

p method_with_yield('ruby', {|s| s.capitalize})
#=> RUBY
```

note... the above DOES NOT work.
Time to keep studying.
