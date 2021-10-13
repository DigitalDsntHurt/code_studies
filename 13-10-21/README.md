# Code Study - October, 13, 2021

## Tool

ruby

## Task

build a binary tree using ruby's enumerable
this resource : https://www.cloudbees.com/blog/the-enumerable-module

## Purpose

learn about ruby's enumerable

## Timebox

15 mis

---

## Reflection

in this ruby code..

```
[-5, 10, 0, 15, -2].select(&amp;:positive?)
```

..what does `&amp;` do?
It seems like first of all, that was a text formatting error on the source blog and the correct code block is..

```
[-5, 10, 0, 15, -2].select(&:positive?)
```

So it seems like what the ampersand does is this:

- pass the syntax `&:method_name` to a ruby enumerable method (use parentheses argument syntax instead of block syntax)
- it then takes that method and applies it to each element in the target enumerable in the way specified by the enumerable method it's being passed to

Also played around with ruby's `.positive?`, `.negative?`, `.zero?`, `.nonzero?` methods.
