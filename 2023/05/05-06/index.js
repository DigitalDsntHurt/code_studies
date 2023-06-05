const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 800).attr('height', 800);
const square = canvas.append('rect')
    .attr('height', 33).attr('width', 44)
    .attr('x', 44).attr('y', 88)
    .attr('fill', 'coral')
    .transition()
    .delay(8)
    .duration(4000)
    .attr('x', 666)
    .attr('y', 8)

const circle = canvas.append('circle')
    .attr('r', 55)
    .attr('cx', 4).attr('cy', 888)
    .attr('fill', 'teal')
    .transition()
    .delay(2200)
    .duration(3300)
    .attr('cx', 222)
    .attr('cy', 2)
