const path = require('path');
const d3 = require("d3");
const colors = require('../../../utils/colors');
const math = require(`../../../utils/math`);

const canvas = d3.select("#canvas").append("svg").attr("width", 500).attr("height", 500);
const rectangle = canvas.append('rect').attr('fill', colors.rand()).attr('x', 200).attr('y', 200).attr('width', 222).attr('height', 75);
const triangle = canvas.append('path').attr('fill', colors.rand()).attr('d', 'M 200 200 L 150 275 H 250 Z');
triangle.transition().duration(math.rand(4444,8888)).attr('transform', `translate(${math.rand(178,222)}, 0)`)
