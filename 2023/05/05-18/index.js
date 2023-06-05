const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width',800).attr('height',400) 


// draw a curved line
const line = canvas.append('path').attr('fill','none').attr('stroke','aqua')
.attr('d','M 666,400 C 888 300, 444 100, 666 2')

// draw a curved line that grows
const length = line.node().getTotalLength();
line
    .attr('stroke-dasharray', `${length} ${length}`)
    .attr('stroke-dashoffset', length)
    .transition().duration(2000)
        .attr('stroke-dashoffset', 0)


