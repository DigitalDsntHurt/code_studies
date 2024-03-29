# drawing with data

exercise
.[] using svg
..[] hard-code a small array of arrays where each inner array is a week (an array containing 7 date objects)
..[] draw a grid of shapes onto the canvas to visualize

.[] using observable's plot
..[] hard-code a small array of arrays where each inner array is a week (an array containing 7 date objects)
..[] draw a grid of shapes onto the canvas to visualize

.[] using d3
..[] hard-code a small array of arrays where each inner array is a week (an array containing 7 date objects)
..[] draw a grid of shapes onto the canvas to visualize

.[] complete this tutorial on using d3 within react apps : https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/

.[] study this tutorial https://observablehq.com/@onoratod/animate-a-path-in-d3
..[] in depth : how does `stroke-dashoffset` work?
..[] in depth : how does `stroke-dasharray` work?
.. ..[] how does `stroke-dasharray`'s dash size property work?
.. ..[] how does `stroke-dasharray`'s gap size property work?

utility funciton exercise -- relational i/o
.[] write a function that
..[] accept a start point
..[] returns an end point "across" the canvas
(
does this verically
does this horizontally
does this diagonally
)

# basics drawing to the dom

.[] what's the most bullet-proof possible way to draw shapes that don't change size or shape given contents or other variables?

# working with dates

mental fuzziness over how mutable vs immutable my date objects are using xdate
.[] what excercise / deliberate practice can i do to resolve this misunderstanding permanently?

# using node modules

.[] make browserify work the same with typescript

outside of node apps / into js or ts files
.[] practice using webpack to import and use arbitrary node modules (d3, xdate are favorites)
.[] practice using vite to import and use arbitrary node modules (d3, xdate are favorites)
.[] practice using CDN to import and use arbitrary node modules (d3, xdate are favorites)

in a node app
.[] practice using webpack to import and use arbitrary node modules (d3, xdate are favorites)
.[] practice using vite to import and use arbitrary node modules (d3, xdate are favorites)
.[] practice using CDN to import and use arbitrary node modules (d3, xdate are favorites)
.[] what are some other approaches?
.[] what are the tradeoffs of all the above approaches?

# automations

.[x] create a bash automation which copies text from a file into another file
..[x] use this for copying html_template content
.[x] bash script to cd into today's dir in code studies repo

.[] create an "iterate" command

- in the current working directory
- determine the correct iteration number (like 1, 2, 3, etc)
- create a new directory with that iteration number
- move all the relevant files (usually node modules, bundle.js, index.html, index.js, package.json, yarn.lock) into that new directory
- should be able to update relative imports to work

## enhancements to portofioli

.[] setup the recursive open to work at deeper nested file path levels
.[] go through an anywhere where the output is a console log, write it to the dom

# frameworks

.[] create a next.js app

# react

.[] how does create-react-app work?
..[] how / where is webpack configured?
..[] how / where is babel configured?
