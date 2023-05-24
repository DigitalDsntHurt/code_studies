const d3 = require("d3");

const canvasWidth = 1200;
const canvasHeight = 800;
const canvas = d3.select('#canvas').append('svg').attr('width', canvasWidth).attr('height', canvasHeight);

const drawCurve = (x) => {
    canvas.append('path')
        .attr('stroke', 'teal').attr('fill', 'none')
        .attr('d', `M ${x},${canvasHeight} L ${x - 88} ${canvasHeight}, ${x + 88} ${0}, ${x} ${0}`)
        .attr('d', `M ${x},${canvasHeight} L ${x - 88} ${canvasHeight - 200}, ${x + 88} ${200}, ${x} ${0}`)
        .attr('d', `M ${x},${canvasHeight} C ${x - 88} ${canvasHeight}, ${x + 88} ${0}, ${x} ${0}`)
        .attr('d', `M ${x},${canvasHeight} C ${x - 88} ${canvasHeight - 200}, ${x + 88} ${200}, ${x} ${0}`)

};

// drawCurve(666);

let x = 88;
canvas.append('path')
    .attr('stroke', 'teal').attr('fill', 'none')
    .attr('d', `M ${x},${canvasHeight} L ${x - 88} ${canvasHeight}, ${x + 88} ${0}, ${x} ${0}`)

x += 111;
canvas.append('path')
    .attr('stroke', 'teal').attr('fill', 'none')
    .attr('d', `M ${x},${canvasHeight} L ${x - 88} ${canvasHeight - 200}, ${x + 88} ${200}, ${x} ${0}`)

x += 88
canvas.append('path')
    .attr('stroke', 'teal').attr('fill', 'none')
    .attr('d', `M ${x},${canvasHeight} C ${x - 88} ${canvasHeight}, ${x + 88} ${0}, ${x} ${0}`)

x += 222
canvas.append('path')
    .attr('stroke', 'teal').attr('fill', 'none')
    .attr('d', `M ${x},${canvasHeight} C ${x - 88} ${canvasHeight - 200}, ${x + 88} ${200}, ${x} ${0}`)