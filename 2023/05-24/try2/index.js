const d3 = require("d3");

const canvasWidth = 1200;
const canvasHeight = 800;
const canvas = d3.select('#canvas').append('svg').attr('width', canvasWidth).attr('height', canvasHeight);

const drawVerticalCurve = (x) => {
    canvas.append('path')
        .attr('stroke', 'teal').attr('fill', 'none')
        .attr('d', `M ${x},${canvasHeight} C ${x - 88} ${canvasHeight - 200}, ${x + 88} ${200}, ${x} ${0}`);
};

const drawHorizontalCurve = (y) => {
    canvas.append('path')
        .attr('stroke', 'teal').attr('fill', 'none')
        .attr('d', `M ${0},${y} C ${200} ${y - 88}, ${1000} ${y + 88}, ${canvasWidth} ${y}`);
};

drawVerticalCurve(44);
drawHorizontalCurve(44);

// what about a kind of diagonal curve?
const drawCurve = (startX, startY, endX, endY, cp1X, cp1Y, cp2X, cp2Y) => {
    canvas.append('path')
        .attr('stroke', 'teal').attr('fill', 'none')
        .attr('d', `M ${startX},${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`);
};
drawCurve(88, 777, 1111, 8, 333, 333, 1122, 666);

// accept a start point
// return an end point "across" the canvas