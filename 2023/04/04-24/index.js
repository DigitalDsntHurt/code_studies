const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 2000).attr('height', 1000);
const rect = canvas.append('rect')
    .attr('width', 88).attr('height', 222)
    .attr('x', 200).attr('y', 400)
    .attr('fill', '#500e10');

// learning
// if we don't use delay on the second animation, only the second animation will apply
// i suspect this is some kind of syncronous behavior wherein d3 won't process multiple animations concurently 
rect.transition().duration(2000).attr('width', 800).attr('height', 288);
rect.transition().delay(2001).duration(3000).attr('x', 666).attr('y', 666);

// another way to do this might be to use async callbacks

const swell = async () => {
    () => rect.transition().duration(2000).attr('width', 800).attr('height', 288);
};

const shrink = async () => {
    () => rect.transition().duration(500).attr('width', 88).attr('height', 8);
};

const move = async () => {
    () => rect.transition().duration(3000).attr('x', 666).attr('y', 666);
};

const dance = async () => {
    // await swell()();
    await move()();
    await shrink()();
};

dance();