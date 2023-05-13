const d3 = require("d3");

const w = window.innerWidth;
const h = window.innerHeight;

const canvas = d3.select('#canvas').append('svg')
    .attr('width', w)
    .attr('height', 888);

// canvas.append('rect')
//     .attr('id', 'dis')
//     .attr('width', w)
//     .attr('height', h)
    // .attr('fill', '#4682b4');


canvas.append('rect')
    .attr('width', 44)
    .attr('height', 44)
    .attr('fill', '#4682b4');

canvas.append('rect')
    .attr('x', 55)
    .attr('width', 44)
    .attr('height', 44)
    .attr('fill', '#4682b4');

// const basicRect = (containerId) => {
//     const container = d3.select(`#${containerId}`);
//     container.append('rect')
//         .attr('x', 4)
//         .attr('y', 4)
//         .attr('width', 44)
//         .attr('height', 44)
//         .attr('stroke', 'black');
//     //     .attr('fill', '#8ba8b7')
// }

// basicRect('dis');

const drawRect = (x, y) => {
    canvas.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', 44)
        .attr('height', 44)
        .attr('stroke', 'black');
    //     .attr('fill', '#8ba8b7')
}

drawRect(0, 55);