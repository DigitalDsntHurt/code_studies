const path = require('path');
const d3 = require("d3");
const colors = require('../../../utils/colors');
const math = require(`../../../utils/math`);


// canvas
const canvas = d3.select("#canvas").append("svg").attr("width", 500).attr("height", 500);

// path play
const dir = d3.path(__dirname, '');
console.log(dir);

// sliding shapes
const startX = math.rand(150, 350);
const startY = math.rand(150, 350);
const rectangle = canvas.append('rect')
    .attr('fill', colors.rand())
    .attr('x', startX).attr('y', startY)
    .attr('width', 222).attr('height', 75);
const triangle = canvas.append('path')
    .attr('fill', colors.rand())
    .attr('d', `M ${startX} ${startY} L ${startX - 50} ${startY + 75} H ${startX + 50} Z`);
triangle.transition().duration(math.rand(4444,8888)).attr('transform', `translate(${math.rand(178,222)}, 0)`)

// text play
canvas.append('text')
    .attr('x', math.rand(0,400)).attr('y', math.rand(0,400))
    .text(dir.toString())
    // .attr('transform', `rotate(${math.rand(0,360)})`)