# Code Study October 6, 2021

## Tool

ruby

## Task

simulate mushroom growth on a 10x10 grid

## Purpose

explore nature simulations in ruby

## Timebox

20 mins

---

## Reflection

This was fun.
I completed the implementation but ran out of time to debug a ``numNeighbors': no implicit conversion from nil to integer (TypeError)` issue. This is likely to do with the fact i'm not taking the edges of the grid into account when checking for neighbors.

I lost some time on variable scope (not being able to access the grid variable from within a method definition without changing the variable name to an all caps constant).
I lost some time having to look up the `sleep` method in ruby.

I'd like to do this again with..

- with more time available
- in typed ruby / sorbet
- in javascript
- in typescript
