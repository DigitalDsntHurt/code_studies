### frontend masters dataviz course

- acquiring data
  - formats: csv, json, files, databases, apis
- wrangling data
  - getting it into the form we need to visualize
- scaling data
  - scale functions are the critical thing in data viz
  - they map values in the data space to values in the visualization space : https://observablehq.com/@anjana/data-visualization-first-steps#cell-236
  - "visualization is all about understanding how your scaling functions map features from your data in the space in which the data exists to features in your visualization in the space in which the visualization exists"

## tools

- visualization
  - d3.js
  - vega-lite
- data wrangling
  - arquero
  - tidy.js

See this article on the [data visualization tools ecosystem 2021](https://cube.dev/blog/dataviz-ecosystem-2021)

## the grammar of graphics

- marks
- scales
- transforms
- facets
  - small versions of the visualization we're rying to make that focus on a subset of the data

Channels

- channels express data values visually
- channels turn data values into visual marks
- channels bind the value of a certain data column to a certain visual property

specific data visualization libraries will have pre-defined mark/channel bindings
for example, in Plot library provides

- x channel for horizontal axes
- y channel for vertical axes
- fill channel for filling a shape with color

In data visualization,

- inputs = domain
- outputs = range

In data visualization,
Scales configure a channel's inputs and outputs

In the plot library, each visualization channel is bound to a scale which configures the input values and output values for the channel in question.

## Exrercise 1

[Observable notebook](https://observablehq.com/d/1729840b70662e39)
