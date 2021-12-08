# Code Study October 4, 2021

## Tool
javascript

## Task
build a grid in which one random cell is filled each second

## Purpose
practice code studies and deliberate practice

## Timebox
20 mins

***

## Reflection
I got bogged down trying to replace the single value.
The way it ultimately came together was on three separate lines:
* one line creates a new array
`const newArr = Array(gridSize).fill(" ");`
* one line replaces a single random value in that array
`newArr[randomY] = 'X';`
* one line replaces the entire grid row with the new array
`grid[randomX] = newArr;`

Not very sexy but gets the job done.
