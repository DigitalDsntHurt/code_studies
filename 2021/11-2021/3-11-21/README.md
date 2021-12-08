# Code Study - /date

## Tool

Ruby

## Task

Build ruby enumarable module from scratch
https://www.cloudbees.com/blog/the-enumerable-module

## Purpose

Understand ruby'e enumerable

## Timebox

20 mins

---

## Reflection

Hardly eneded up working on enumerable. In the code sample there was lambda code i didn't grok so i spent my 20 mins on that.

Fun and interesting. and clearly powerful.
I got stuck and ran out of time trying to write multi-line lambdas.

### Ruby Lambdas

A lambda is an encapsulation of logic and data. It's somewhere between a normal stateless function and a full blown object (which has state and methods to operate on that state). Lambdas are useful for sharing code logic and data between different parts of an application, either in-line or via variable assigment.

In ruby, we create lambda functions with the lambda keyword and invoke them with the .call method.

```
sweet_code = lambda { puts 'eyo this pretty slick' }
sweet_code #=>
sweet_code.call #=> 'eyo this pretty slick'
```

To pass arguments to lambdas, we need to use the literal lambda operator `->`..

```
my_fire_lambda = lambda (arg) { puts "eyup this is my argument: #{arg}" }
my_fire_lambda.call('g'dday') #=> ERROR. lambda keyword doesn't create lambdas that accept arguments.

my_fire_lambda = -> (arg) { puts "eyup this is my argument: #{arg}" }
my_fire_lambda.call("g'ddayday")
```

or more complicated...

```
# DOES NOT WORK
my_nasty_lambda = -> (num, str) do
  p num * num
  p "this is my #{str} on drugs"
end
my_nasty_lambda(3, 'ruby brain')
```
