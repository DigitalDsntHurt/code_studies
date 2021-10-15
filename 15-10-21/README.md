# Code Study - October 15, 2021

## Tool

ruby

## Task

write a function that uses `yield` in an interesting way

## Purpose

learn about riuby's `yield`

## Timebox

8 mins

---

## Reflection

Brief and satisfying.
More help from here : https://medium.com/rubycademy/the-yield-keyword-603a850b8921
What did we learn today?
We learned that the `yield` inside method definitions replaces any block passed to the method on invocation. here's the syntax:

### method without arguments

```
def simple_method
  yield
end

simple_method{ puts 'this will printt when you invoke simple_method' }
#=> this will printt when you invoke simple_method
```

### method with arguments

```
def arg_method(arg)
  yield arg
end

arg_method('daaaaamn'){ |argument| puts argument.upcase }
#=> DAAAAAAMN
```
