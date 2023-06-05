const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 2000).attr('height', 1500);

// this draws a rectangle frame
// const rect = canvas.append('rect').attr('width', 400).attr('height', 400).attr('x', 1).attr('fill', 'none').attr('stroke', 'blue')

// this draws a triangle using an svg path
// const path = canvas.append('path').attr('d', "M 100 100 L 300 100 L 200 300 z").attr('fill', 'red').attr('stroke', 'blue').attr('stroke-width', 3);

// when appended, this draws a triangle using d3's symbolTriangle
const triangle2 = d3.symbol().type(d3.symbolTriangle).size(500);

// this doesn't really work as x and y properties aren't effective for svg paths
// canvas
//     .append("path")
//     .attr("d", triangle2)
//     .attr("fill", "green")
//     .attr('x', 100)
//     .attr('y', 100);

canvas
    .append("path")
    .attr("d", triangle2)
    .attr("fill", "green")
    .attr("transform", "translate(50, 50)");

const g = canvas.append('g').attr('transform', 'translate(88,50)');
g.append("path")
    .attr("d", triangle2)
    .attr("fill", "orange");
