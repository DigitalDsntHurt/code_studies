# Code Study - /date

## Tool

ruby, my eyes

## Task

go through [this resource](https://mixandgo.com/learn/ruby/blocks) and work to actively understand

## Purpose

understand ruby blocks

## Timebox

30 mins

## Reflection

- a block in ruby is just code, either between `do` and `end` keywords or between `{` `}`
- in ruby, you can pass a block to any method, even if the method isn't setup to use the block

```
def mymethod(n)
  puts "Ten plus #{n} is #{10 + n}"
end

mymethod(8, {55 % 2})
```
