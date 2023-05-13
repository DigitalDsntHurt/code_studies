// console.log('hi')

const d3 = require('d3');

const canvas = d3.select("#canvas");
console.log(canvas);
svg = canvas.append("svg").attr("width", 800).attr("height", 200);


// create svg element:
// const wilbert = d3.select("#canvas").append("svg").attr("width", 800).attr("height", 200)

// Add the path using this helper function
svg.append('rect')
  .attr('x', 10)
  .attr('y', 120)
  .attr('width', 600)
  .attr('height', 40)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');

// canvas.append(wilbert);