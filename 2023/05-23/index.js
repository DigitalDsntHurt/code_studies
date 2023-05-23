const d3 = require("d3");
const colors = require('../../utils/colors');
const math = require('../../utils/math');

const changeColor = (node) => {
    node.transition()
        .delay(math.rand(0,4444))
        .duration(math.rand(6666,22222))
        .style('background-color', colors.rand())
        .on('end', changeColor);
};

const canvasWidth = 1200;
const canvasHeight = 800;
const canvas = d3.select('#canvas').append('svg')
    .attr('width', 1200).attr('height', 800)
    .style('background-color', colors.rand());
changeColor(canvas);

const waveCurve = (curve) => {
    const parsedCurveCoords = curve._groups[0][0].attributes[3].nodeValue.split(/[, ]/).filter(item => item !== '');
    
    const startPointX = parsedCurveCoords[1];
    const startPointY = parsedCurveCoords[2];
    const startPoint = `${startPointX},${startPointY}`;

    const endPointX = parsedCurveCoords[8];
    const endPointY = parsedCurveCoords[9];
    const endPoint = `${endPointX},${endPointY}`;


    const controlPoint1X = Number(parsedCurveCoords[4]);
    const controlPoint1Y = parsedCurveCoords[5];
    const controlPoint1 = `${math.plusOrMinusN(controlPoint1X, math.rand(0,44))} ${controlPoint1Y}`

    const controlPoint2X = Number(parsedCurveCoords[6]);
    const controlPoint2Y = parsedCurveCoords[7];
    const controlPoint2 = `${math.plusOrMinusN(controlPoint2X, math.rand(0,44))} ${controlPoint2Y}`;
    
    const newCurve = curve.transition()
        .delay(0).duration(8888)
        .attr('d', `M ${startPoint} C ${controlPoint1}, ${controlPoint2}, ${endPoint}`)
        .on('end', () => waveCurve(newCurve));
};

const drawCurve = () => {
    const startPointX = math.rand(-22, canvasWidth + 22);
    const startPointY = canvasHeight + 22;
    const startPoint = `${startPointX},${startPointY}`;

    const endPointX = math.plusOrMinusN(startPointX, math.rand(0, 22/100*canvasWidth));
    const endPointY = -22;
    const endPoint = `${endPointX} ${endPointY}`;

    const controlPoint1X = math.plusOrMinusN(startPointX, math.rand(22/100*canvasWidth, 44/100*canvasWidth));
    const controlPoint1Y = math.plusOrMinusN(startPointY, math.rand(2/100*canvasHeight, 8/100*canvasHeight));
    const controlPoint1 = `${controlPoint1X} ${controlPoint1Y}`;

    const controlPoint2X = math.plusOrMinusN(endPointX, math.rand(22/100*canvasWidth, 44/100*canvasWidth));;
    const controlPoint2Y = math.plusOrMinusN(endPointY, math.rand(2/100*canvasHeight, 8/100*canvasHeight));
    const controlPoint2 = `${controlPoint2X} ${controlPoint2Y}`;

    const curve = canvas.append('path')
        .attr('fill', 'none').attr('stroke',colors.rand()).attr('stroke-width','4')
        .attr('d', `M ${startPoint} C ${controlPoint1}, ${controlPoint2},${endPoint}`);
    
    return curve;
};

const curve = drawCurve();
waveCurve(curve);
