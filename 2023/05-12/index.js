const d3 = require("d3");
const math = require('../../utils/math');

const canvasWidth = 888;
const canvasHeight = 444;

const canvas = d3.select('#canvas').append('svg').attr('width',canvasWidth).attr('height',canvasHeight);
// const reed = canvas.append('path').attr('stroke', 'green').attr('fill', 'none').attr('d',`M88,443 C44 400, 222 100, 88 ${reedHeight()}`);

const generateReedHeight = () => {
    const maxReedHeight = 22 / 100 * canvasHeight;
    return math.rand(1,Math.ceil(maxReedHeight))
}

const drawReed = (rootPosition) => {
    const startX = rootPosition;
    const startY = 443;
    const startPoint = `${startX},${startY}`;
    const reedHeight = generateReedHeight();
    const controlPoint1 = `${math.rand(startX - 66, startX)} ${math.rand(canvasHeight / 2, canvasHeight)}`;
    const controlPoint2 = `${math.rand(startX, startX + 66)} ${math.rand(0, canvasHeight / 2)}`;
    const endPoint = `${startX} ${reedHeight}`;

    canvas.append('path')
        .attr('stroke', 'green').attr('fill', 'none')
        .attr('d',`M${startPoint} C${controlPoint1}, ${controlPoint2}, ${endPoint}`);
};

let rootPosition = 0;
while (rootPosition < canvasWidth) {
    drawReed(rootPosition);
    rootPosition += math.rand(2,8);
}

// while (true) { location.reload() }