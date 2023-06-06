const d3 = require("d3");

const canvasWidth = 600;
const canvasHeight = 600;
const canvas = d3.select('#canvas').append('svg').attr('width', canvasWidth).attr('height', canvasHeight);
const bounceHeight = 44;
// Top
canvas.append('circle')
    .attr('r', 22)
    .attr('cx', canvasWidth / 2).attr('cy', bounceHeight)
    .attr('fill', 'orange');

// Right
canvas.append('circle')
    .attr('r', 22)
    .attr('cx', canvasWidth - bounceHeight).attr('cy', canvasHeight / 2)
    .attr('fill', 'orange');

// Bottom
canvas.append('circle')
    .attr('r', 22)
    .attr('cx', canvasWidth / 2).attr('cy', canvasHeight - bounceHeight)
    .attr('fill', 'orange');

// Left
const leftBall = canvas.append('circle')
    .attr('r', 22)
    .attr('cx', bounceHeight).attr('cy', canvasHeight / 2)
    .attr('fill', 'orange');


let plusOrMinus = 1;
const leftWallBounce = (ball) => {
    plusOrMinus = plusOrMinus * -1;
    // console.log(ball);
    const xCoord = Number(ball._groups[0][0].attributes.cx.value)
    const newCx = xCoord + bounceHeight * plusOrMinus;
    // console.log(newCx);

    const newBall = ball.transition()
        .duration(1000)
        .attr('cx', newCx)
        .on('end', () => plusOrMinus(newBall));
};

leftWallBounce(leftBall);