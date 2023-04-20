const d3 = require("d3");

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const x = 1200;
const y = 800;
const canvas = d3.select('#canvas').append('svg').attr('width', x).attr('height',y);

// const appendText = () => {
//     canvas.append('text').text('gday').attr('x', getRandomInt(100,1100)).attr('y', getRandomInt(20,780));
// };
// appendText();

const appendFlashingText = () => {
    canvas.append('text').text('gday')
        .attr('x', getRandomInt(100,1100))
        .attr('y', getRandomInt(20,780))
        .attr('fill-opacity', 1)
    .transition()
        .duration(4000)
        .attr('fill-opacity', 0)
    .on('end', appendFlashingText());
};
appendFlashingText();