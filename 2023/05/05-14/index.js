const d3 = require("d3");
const math = require('../../utils/math');

const canvas = d3.select('#canvas').append('svg').attr('width',800).attr('height',400);

const drawPath = (sp, cp1, cp2, ep) => {
    return `M${sp} C ${cp1}, ${cp2}, ${ep}`
};

const assembleControlPoint = (x,y) => {
    return `${x} ${y}`;
}

let startPointX = math.rand(8,792);
const startPointY = 400;
const startPoint = `${startPointX},${startPointY}`;
console.log('startPoint : ', startPoint);

const controlPoint1X = math.plusOrMinusN(startPointX,math.rand(22,88));
const controlPoint1Y = 200;
const controlPoint1 = assembleControlPoint(controlPoint1X, controlPoint1Y);
console.log('controlPoint1 : ', controlPoint1);

const controlPoint2X = startPointX - Math.abs(controlPoint1X - startPointX);
const controlPoint2Y = 200;
const controlPoint2 = `${controlPoint2X} ${controlPoint2Y}`;
console.log('controlPoint2 : ', controlPoint2);

const endPointX = startPointX;
const endPointY = 8;
const endPoint = `${endPointX} ${endPointY}`
console.log('endPoint : ', endPoint);

// const reed = canvas.append('path')
//     .attr('stroke','brown').attr('fill','none')
//     .attr('d', drawPath(startPoint, controlPoint1, controlPoint2, endPoint));

const drawReed = () => {
    const reed = canvas.append('path')
        .attr('stroke','brown').attr('fill','none')
        .attr('d', drawPath(startPoint, controlPoint1, controlPoint2, endPoint));
    return reed;
};

const wave = (node) => {
    node.transition().duration(1800).ease((t) => d3.easeBackInOut(t))
    .attr('d', drawPath(startPoint, assembleControlPoint(math.plusOrMinusN(controlPoint1X,math.rand(0,88)),200), assembleControlPoint(math.plusOrMinusN(controlPoint2X,math.rand(0,88)),200), endPoint))
    .on('end', () => wave(node))
};

// wave(reed);

while (startPointX < 800) {
    const reed = drawReed();
    wave(reed);
    startPointX += math.rand(2,8);
}

