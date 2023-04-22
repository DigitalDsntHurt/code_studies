const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 1200).attr('height', 900);
const rect = canvas.append('rect').attr('x', 188).attr('y', 600).attr('width', 888).attr('height', 188).attr('fill', '#f08080');

// rect.transition().duration(4000).attr('width', 222).attr('height', 22);

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shrink = () => {
    rect.transition().duration(getRandomInt(1, 2000))
        .attr('width', getRandomInt(0, 600)).attr('height', getRandomInt(0, 450))
        .on('end', grow);
};

const grow = () => {
    rect.transition().duration(getRandomInt(2000, 6000))
        .attr('width', getRandomInt(450, 2000)).attr('height', getRandomInt(450, 900))
        .attr('x', getRandomInt(0, 1200)).attr('y', getRandomInt(0, 900))
        .on('end', shrink);
};

shrink();