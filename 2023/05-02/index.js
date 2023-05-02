// Figured out how to do this from this https://observablehq.com/@onoratod/animate-a-path-in-d3
// excellent tutorial

const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 800).attr('height', 800);

const horizontalLine = canvas.append('path')
    .attr('stroke', '#A93226')
    .attr('stroke-width', '2')
    .attr('d', 'M 22,44 L 777,44');
const horizontalLength = horizontalLine.node().getTotalLength();
// console.log(horizontalLength);

 const verticalLine = canvas.append('path')
    .attr('stroke', '#F1C40F')
    .attr('d', 'M 600,2 L 600,444');
const verticalLength = verticalLine.node().getTotalLength();
// console.log(verticalLength);

verticalLine
    .attr('stroke-dasharray', verticalLength + " " + verticalLength)
    .attr('stroke-dashoffset', verticalLength)
    .transition()
    .attr('stroke-dashoffset', 0)
    .duration(6000)

horizontalLine
    .attr('stroke-dasharray', horizontalLength + " " + horizontalLength)
    .attr('stroke-dashoffset', horizontalLength)
    .transition()
    .attr('stroke-dashoffset', 0)
    .delay(3300)
    .duration(2000)
