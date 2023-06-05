const d3 = require("d3");
const math = require('../../utils/math');

canvasWidth = 1440
const canvas = d3.select('#canvas').append('svg').attr('width',canvasWidth).attr('height',222);

let xPosition = 22;
let yPosition = 111;
const human = canvas.append('rect').attr('width',12).attr('height',12).attr('x',xPosition).attr('y',yPosition).attr('fill','purple');
const doge = canvas.append('rect').attr('width',16).attr('height',3).attr('x',xPosition - 4).attr('y',yPosition - 6).attr('fill','brown');

const randomOrZero = () => {
    const options = [() => 0,() => math.rand(-1,1)];
    return options[math.rand(0,1)]();
}

const walk = () => {
    if (xPosition > canvasWidth) return;
    xPosition += math.rand(6,18)
    human.transition().duration(math.rand(22,333))
        .attr('x',xPosition)
        .attr('y',yPosition + randomOrZero())
        .on('end', walk)
    
    doge.transition().duration(math.rand(22,333))
        .attr('x',xPosition + math.rand(0,6))
        .attr('y',yPosition - 6 + math.rand(-2,2))
};

walk();
