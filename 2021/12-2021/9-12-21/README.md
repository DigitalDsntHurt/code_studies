# Code Study - /date

## Tool

ruby, eyes, brain

## Task

read through ruby yield resources

- https://stackoverflow.com/questions/3066703/blocks-and-yields-in-ruby => this was a great and helpful and super clear and simple resource
- https://www.geeksforgeeks.org/the-yield-keyword-in-ruby/

## Purpose

understand ruby yield

## Timebox

30mins

## Reflection

### what is ruby yield

in ruby, methods can accept code blocks to be executed at arbitrary moments throughout the method's execution. when a method invokes the code block passed to it, it does so with `yield`
at a high level, the learning is that any time you pass a code block to a method as an argument, the code block is being invoked inside the body of the method via yield

i get the basics and the concept. but my ability to successfully write methods with yield starts to break down quickly, as it becomes necessary to pass arguments in the yielded blocks
