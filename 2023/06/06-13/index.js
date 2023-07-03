const d3 = require("d3");
const math = require('../../utils/math');

const canvasWidth = 1200;
const canvasHeight = 800;
const canvas = d3.select("#canvas").append("svg").attr("width", canvasWidth).attr("height", canvasHeight);

const directions = ['vertical', 'horizontal'];

const makeTurn = (currentX, currentY, direction) => {
    if (direction === 'vertical') {
        const newY = currentY + math.rand(1, canvasHeight - currentY);
        return `V ${newY}`
    }

    if (direction === 'horizontal') {
        const newX = currentX + math.rand(1, canvasWidth - currentX);
        return ` H ${newX}`
    }
};

const drawPipe = () => {
    let currentX = math.rand(-8,0);
    let currentY = math.rand(-8,0);
    const startPoint = `M ${currentX} ${currentY}`
    
    let pathD = `${startPoint}`
    
    let iteration = 0;
    let direction = directions[math.rand(0,1)];

    while (iteration < 12) {
        const turn = makeTurn(currentX, currentY, direction);
        pathD += turn;
        direction = directions[math.rand(0,1)];
        currentX = turn.split(' ')[1];
        currentY = turn.split(' ')[2];
        iteration++;
    }

    canvas.append('path')
        .attr('stroke', 'black').attr('fill', 'none').attr('stroke-width', 2)
        .attr('d', pathD)
};

drawPipe();