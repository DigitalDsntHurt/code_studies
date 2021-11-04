# Code Study - /date

## Tool

ruby

## Task

build ruby's enumearable module from scratch
https://www.cloudbees.com/blog/the-enumerable-module

## Purpose

learn about ruby's enumerable module

## Timebox

## 20 mins

## Reflection

### what is ruby .send ?

`.send` is called on an object
its first argument is a method name in symbol or string form (if string, `.send` automatically converts it to a symbol)
`.send` calls the method passed to its first argument on the object to the left of `.send`'s call-time dot and passes in all subsequent arguments as arguments to that invocation

```
p 8.send(:+, 2) #=> 10
p 8.send("+", 2) #=> 10
p 8.send(:+, 2, 2) #=> ArgumentError (wrong number of arguments (given 2, expected 1))
```
