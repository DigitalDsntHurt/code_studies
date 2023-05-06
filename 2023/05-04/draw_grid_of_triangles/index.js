const d3 = require("d3");
const colors = require('../../../utils/colors');

const canvas = d3.select('#canvas').append('svg').attr('width', 2000).attr('height', 1500);
const drawTriangle = (x,y) => {
    const triangle = d3.symbol().type(d3.symbolTriangle).size(500);
    canvas
        .append("path")
        .attr("d", triangle)
        .attr("fill", colors.rand())
        .attr("transform", `translate(${x}, ${y})`);
};
// drawTriangle(22,22);

const weeksData = [
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
];

// the below is WIP and does not work
// canvas.data(weeksData).enter(d => drawTriangle());

// make a selection
    // bind selection to data
    // set what happend on entry of the data
    // append something to the dom for each 