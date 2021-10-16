# Code Study - October 16, 2021

## Tool

ruby

## Task

finish reading and playing with this resource : https://medium.com/rubycademy/the-yield-keyword-603a850b8921

## Purpose

understand ruby's yield

## Timebox

30 mins

---

## Reflection

wow super frustrating session. i got bogged down in a bunch of details:

- bock variable scoping (why can't i use my block variables inside parentheses?)
- yield with arguments

and then just ran out of time.

---

### followup

I couldn't resist coming back to this for a couple mins.

it turns out :

1. the vs code ruby interpreter is a little buggy and the parenthetical block variable scope issues i was having are an artifact of that. running these files from mac's command line works reliably

2. yield is a ruby method. not a keyword. so another syntax error i ran into was simply `yield (arg)` instead of `yield(arg)` which is equivalent to `yield arg`
