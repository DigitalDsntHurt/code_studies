const d3 = require("d3");
const colors = require('../../utils/colors');
const math = require('../../utils/math');

const canvasWidth = 1200;
const canvasHeight = 800;
const canvas = d3.select('#canvas').append('svg').attr('width', canvasWidth).attr('height', canvasHeight);

const buildPath = (startX) => {
    const cp1X = startX + math.rand(88,222); 
    const cp1Y = canvasHeight / 2;

    const cp2X = startX - math.rand(88,222);
    const cp2Y = canvasHeight / 2;

    return `
        M ${startX} ${canvasHeight} 
        C ${cp1X} ${cp1Y}, 
        ${cp2X} ${cp2Y}, 
        ${startX + math.plusOrMinusN(startX, 8/100*canvasWidth)} ${math.rand(0,22/100*canvasHeight)}
    `;
};

const drawReed = (rootX) => {
    const reed = canvas.append('path')
        .attr('fill', 'none').attr('stroke', colors.rand())
        .attr('d', buildPath(rootX));
    
    return [reed, rootX];
};

const waveReed = (reed, rootX) => {
    reed.transition()
        .delay(0)
        .duration(2222)
        .ease(t => d3.easeQuad(t))
        .attr('d', buildPath(rootX))
        .on('end', () => waveReed(reed, rootX));
};

let startX = -333;
while (startX < canvasWidth + 333) {
    const [reed, rootX] = drawReed(startX);
    waveReed(reed, rootX);
    startX += math.rand(0,8);
};
