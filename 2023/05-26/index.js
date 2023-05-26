const d3 = require("d3");
const math = require('../../utils/math');
const colors = require('../../utils/colors');

const canvasWidth = 1200;
const canvasHeight = 800;
const canvas = d3.select('#canvas').append('svg').attr('width', canvasWidth).attr('height', canvasHeight);

const drawThing = () => {
    const circ = canvas.append('circle')
        .attr('r', math.rand(8,222))
        .attr('cx', math.rand(111, canvasWidth - 111))
        .attr('cy', math.rand(99, canvasHeight - 99))
        .attr('fill', colors.rand());
    
    return circ;
};

drawThing();