const d3 = require("d3");
const math = require('../../utils/math');
const color = require('../../utils/colors');

const canvasWidth = 888;
const canvas = d3.select('#canvas').append('svg').attr('width',canvasWidth).attr('height',400);

const buildPath = (rootX) => {

    const startPointY = 400;
    const startPoint = `${rootX},${startPointY}`;

    const controlPoint1X = rootX + math.rand(22,111);
    const controlPoint1Y = 300;
    const controlPoint1 = `${controlPoint1X} ${controlPoint1Y}`;
    
    const controlPoint2X = rootX - math.rand(22,111);
    const controlPoint2Y = 100;
    const controlPoint2 = `${controlPoint2X} ${controlPoint2Y}`;
    
    const endPointX = math.plusOrMinusN(rootX,math.rand(0,44));
    const endPointY = math.rand(0,44);
    const endPoint = `${endPointX} ${endPointY}`;

    return `M ${startPoint} C ${controlPoint1}, ${controlPoint2}, ${endPoint}`
};

const drawReed = (rootPosition) => {
    const reed = canvas.append('path')
        .attr('stroke',color.rand()).attr('fill','none')
        .attr('d', buildPath(rootPosition))

    const length = reed.node().getTotalLength();

    reed
        .attr('stroke-dasharray', `${length} ${length}`)
        .attr('stroke-dashoffset', length)
        .transition().duration(math.rand(0,12212))
            .attr('stroke-dashoffset', 0)
};

let rootPosition = -44;
while (rootPosition < canvasWidth + 44) {
    console.log(rootPosition);
    drawReed(rootPosition);
    rootPosition += math.rand(1,8);
};
