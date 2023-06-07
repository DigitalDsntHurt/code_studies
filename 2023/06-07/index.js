const d3 = require("d3");

const canvasWidth = 800;
const canvasHeight = 600;
const canvas = d3.select('#canvas').append('svg').attr('width', canvasWidth).attr('height', canvasHeight);

const pipe = canvas.append('path')
    .attr('stroke', '#b3b3b3').attr('stroke-width', 4).attr('fill', 'none')
    .attr('d', 'M 8 500 L 222 500 L 222 250 L 777 250 L 777 588 L 666 588 L 666 444');

const length = pipe.node().getTotalLength();
console.log(length);

pipe
    .attr('stroke-dasharray', `${length} ${length}`)
    .attr('stroke-dashoffset', length)

pipe
    .transition()
    .duration(8000)
    .attr('stroke-dashoffset', 0)
