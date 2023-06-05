const d3 = require("d3");
const math = require('../../utils/math');

const canvasWidth = 800;
const canvasHeight = 800;
const canvas = d3.select('#canvas').append('svg').attr('width',canvasWidth).attr('height',canvasHeight);

const drawFootPrint = (x,y,delay) => {
    canvas.append('rect')
        .attr('width',8).attr('height',3)
        .attr('fill','transparent')
        .attr('x',x).attr('y',y)
        .transition().delay(delay)
            .attr('fill','green')
};


let x = 88;
let y = 444;
let isRightStep = true;
let delay = 0

while (x < canvasWidth) {
    yCoord = isRightStep ? y + math.rand(0,3) : y - math.rand(1,5);
    drawFootPrint(x,yCoord,delay);
    x += math.rand(9,12);
    isRightStep = !isRightStep;
    delay += 400;
}