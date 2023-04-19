const d3 = require("d3");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const canvas = d3.select('#canvas').append('svg').attr('width', screenWidth).attr('height', screenHeight);

const colors = ['#f77d00','#f06c00','#ff0228','#ffc200','#ee9e9d','#eabeb4','#b70849'];

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const generateCirclesData = () => {
    const circles = [];

    let numberOfCircles = getRandomInt(4, 22);

    while(numberOfCircles > 0) {
        circles.push({
            initialR: getRandomInt(2, 222), 
            cx: getRandomInt(0, screenWidth),
            cy: getRandomInt(0, screenHeight),
            fill: colors[getRandomInt(0,colors.length - 1)],
            transitionDelay: getRandomInt(0, 2000),
            transitionDuration: getRandomInt(0, 8000),
            nextR: getRandomInt(2, 222),
        });
        numberOfCircles -= 1;
    }
    return circles;
};

const data = generateCirclesData();
console.log(data);

canvas.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', d => d.initialR)
    .attr('cx', d => d.cx)
    .attr('cy', d => d.cy)
    .attr('fill', d => d.fill)
.transition()
    .delay(d => d.transitionDelay)
    .duration(d => d.transitionDuration)
    .attr('r', d => d.nextR)