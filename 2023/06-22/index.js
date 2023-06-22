const d3 = require("d3");
const colors = require('../../utils/colors');
const math = require('../../utils/math');

const canvas = d3.select("#canvas").append("svg").attr("width", 500).attr("height", 500);
// const triangle = canvas.append("path").attr("d", "M 100 350 L 250 100 L 400 350 Z").attr("fill", "none").attr("stroke", "blue").attr("stroke-width", 10);
// const triangle = canvas.append('path').attr('fill', 'black').attr('d', 'M 222 222 L 111 333 H 444 L 222 222');
// const triangle = canvas.append('path').attr('fill', 'black').attr('d', 'M 222 222 L 111 333 H 444 Z');
const rectangle = canvas.append('rect').attr('fill', colors.rand()).attr('x', 200).attr('y', 200).attr('width', 222).attr('height', 75);
const triangle = canvas.append('path').attr('fill', colors.rand()).attr('d', 'M 200 200 L 150 275 H 250 Z');
triangle.transition().duration(math.rand(4444,8888)).attr('transform', `translate(${math.rand(178,222)}, 0)`)