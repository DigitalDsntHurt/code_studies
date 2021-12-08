# Code Study - October 12, 2021

## Tool

html, css, (possibly) javascript

## Task

draw shapes

## Purpose

practice drawing shapes

## Timebox

20 mins

---

## Reflection

Fun using this resource to learn and practice how to draw triangles with pure (html and) CSS.

CSS borders meet eachother at 45 degree angles. So setting three of a square div's four border properties to a non-zero width and setting two of those three border properties' color to transparent hacks us a triangle.

It's important to set the square div's height and width explicitly to zero.

I got stuck initially setting the line weight to transparent and keeping all the colors the same. So this..

```
.triangle{
  border-bottom: 88px solid green;
  border-right: 66px transparent green;
  border-left: 99px transparent green;
}
```

..doesn't work. But this does..

```
.triangle{
  border-bottom: 88px solid green;
  border-right: 66px solid transparent;
  border-left: 99px solid transparent;
  height: 0;
  width: 0;
}
```
