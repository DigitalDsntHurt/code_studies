const d3 = require("d3");

const canvasWidth = 800;
const canvasHeight = 600;
const canvas = d3.select('#canvas').append('svg').attr('width', canvasWidth).attr('height', canvasHeight);

// FIRST GO
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

// NEXT GO
const animateLine = (line) => {
    const length = line.node().getTotalLength();

    line
        .attr('stroke-dasharray', `${length} ${length}`)
        .attr('stroke-dashoffset', length)
    
    line
        .transition()
        .duration(8000)
        .attr('stroke-dashoffset', 0)
};

const wire = canvas.append('path')
    .attr('stroke', '#c6c6c6').attr('stroke-width', 2).attr('fill', 'none')
    .attr('d', 'M 777 0 H 798 V 111 H 666 V 333 H 707 V 200 H 8');

animateLine(wire);