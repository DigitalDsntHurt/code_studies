const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width',400).attr('height',200);
const line = canvas.append('path')
    .attr('stroke','gold').attr('fill','none')
    .attr('d', 'M 0,25 C 100 400, 300 0, 400 25');

const length = line.node().getTotalLength();

line
    .attr('stroke-dasharray', `${length} ${length}`)
    .attr('stroke-dashoffset', length)
    .transition().duration(8888)
        .attr('stroke-dashoffset', 0)