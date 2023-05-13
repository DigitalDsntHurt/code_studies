const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 1200).attr('height', 800)

const data = ['hey']
const circle = canvas.selectAll('circle').data(data)

circle.enter().append('circle')
    .attr('r', 0)
    .attr('cx', 888)
    .attr('cy', 444)
    .attr('fill', '#991370')
.transition().delay(400).duration(32000)
    .attr('r', 1200)
    .attr('cx', 88)
    .attr('cy', 88)
