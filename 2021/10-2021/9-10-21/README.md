# Code Study - October 9, 2021

## Tool

html, css, javascript

## Task

draw circles

## Purpose

learn about drawing circles
practice drawing circles

## Timebox

44 mins

---

## Reflection

This didn't work :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Circles Practice</title>
  </head>
  <style>
    circle {
      height: 222px;
      width: 222px;
      border-radius: 50%;
      border: solid 1px coral;
    }
  </style>
  <body>
    <circle/>
  </body>
</html>
```

And i don't really understand why not.
I think that within an `<svg>` tag, a `<circle>` tag has some meaning. But what is the meaning of just `<circle />` or of `<circle></circle>` (which also doesn't work)? Especially since this _does_ work :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Circles Practice</title>
  </head>
  <style>
    #circle{
      height: 222px;
      width: 222px;
      border-radius: 50%;
      border: solid 1px coral;
    }
  </style>
  <body>
    <circle/>
    <div id='circle'></div>
	  <!-- <script src="index.js"></script> -->
  </body>
</html>
```

Still. A bit of success. All nuance aside, what's the simplest, easiest way to draw a circle?

- create a div
- give it height, width, visible border
- give it border-radius 50%

You're done.
