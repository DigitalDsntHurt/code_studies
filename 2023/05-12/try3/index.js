const d3 = require("d3");
const math = require('../../../utils/math');

const canvasWidth = 888;
const canvasHeight = 444;

const canvas = d3.select('#canvas').append('svg').attr('width',canvasWidth).attr('height',canvasHeight);

const generateReedHeight = () => {
    const maxReedHeight = 22 / 100 * canvasHeight;
    return math.rand(1,Math.ceil(maxReedHeight))
}

const drawReed = (rootPosition) => {
    const startX = rootPosition;
    const startY = 400;
    const startPoint = `${startX},${startY}`;
    const reedHeight = generateReedHeight();
    const controlPoint1 = `${math.rand(startX - 66, startX)} ${math.rand(canvasHeight / 2, canvasHeight)}`;
    const controlPoint2 = `${math.rand(startX, startX + 66)} ${math.rand(0, canvasHeight / 2)}`;
    const endPoint = `${startX} ${reedHeight}`;

    const reed = canvas.append('path')
        .attr('stroke', 'green').attr('fill', 'none')
        .attr('d',`M${startPoint} C${controlPoint1}, ${controlPoint2}, ${endPoint}`);
    
    waveReed(reed, startPoint, endPoint, controlPoint1, controlPoint2);
};

const waveReed = (node, startPoint, endPoint, controlPoint1, controlPoint2) => {
    const endCoords = endPoint.split(' ');
    // const newEndX = Number(endCoords[0]) + 44 * plusOrMinusOne();
    const newEndX = Number(endCoords[0]) - 66;
    const newEndPoint = `${newEndX} ${endCoords[1]}`;
    node.transition().duration(math.rand(4444,8888))
        .attr('d',`M${startPoint} C${controlPoint1}, ${controlPoint2}, ${newEndPoint}`)
};

const plusOrMinusOne = () => {
    const options = [-1,1];
    return options[math.rand(0,1)]
};

let rootPosition = 0;
while (rootPosition < canvasWidth) {
    drawReed(rootPosition);
    rootPosition += math.rand(2,8);
};
