const d3 = require("d3");

const days = [1,2,3,4,5,6,7];
const weeks  = [
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
];

const canvas = d3.select('#canvas').append('svg').attr('width',800).attr('height',400);

// appends one rectangle to the canvas for each element in an array
canvas.selectAll('.day')
    .data(days)
    .enter()
    .append('rect')
        .attr('class','day')
        .attr('x', d => {
            console.log(d);
            return d * 77;
        })
        .attr('y', 222)
        .attr('width', 66).attr('height', 25)
        .attr('fill', 'yellow')