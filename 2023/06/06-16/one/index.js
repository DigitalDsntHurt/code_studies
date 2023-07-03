const d3 = require("d3");
const math = require('../../../utils/math');
const colors = require('../../../utils/colors');

const canvasWidth = 1200;
const canvasHeight = 800;
const canvas = d3.select("#canvas").append("svg").attr("width", canvasWidth).attr("height", canvasHeight);


const drawPoc = () => {
    canvas.append('circle')
        .attr('cx', math.rand(0,canvasWidth))
        .attr('cy', math.rand(0,canvasHeight))
        .attr('r', math.rand(2,44))
        .attr('fill', colors.rand());
};

const drawPox = () => {
    let iteration = 0;
    while (iteration < math.rand(44, 444)) {
        drawPoc();
        iteration++;
    }
};

drawPox();