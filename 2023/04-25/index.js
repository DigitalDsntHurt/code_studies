const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 1500).attr('height', 900);


const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const begin = () => {
    const circle = canvas.append('circle').attr('r', rand(1,444)).attr('cx', rand(22,1414)).attr('cy', rand(8,888)).attr('fill', '#977073');
    return circle;
};

// Here, we hard code the next transition

// const grow = () => {
//     circle
//         .transition().duration(rand(3000, 8000)).delay(-50)
//         .attr('r', rand(1,900))
//         .on('end', move);
// };

// const move = () => {
//     circle
//         .transition().duration(rand(1, 5000)).delay(-50)
//         .attr('cx', rand(0, 1500)).attr('cy', rand(0,900))
//         .on('end', shrink);
// };

// const shrink = () => {
//     circle
//         .transition().duration(rand(1, 1500)).delay(-50)
//         .attr('r', rand(1,900))
//         .on('end', move);
// };


// Here, we select the next transition randomly
const grow = () => {
    circle
        .transition().duration(rand(3000, 8000)).delay(-50)
        .attr('r', rand(1,900))
        .on('end', steps[rand(0,2)]);
};

const move = () => {
    circle
        .transition().duration(rand(1, 5000)).delay(-50)
        .attr('cx', rand(0, 1500)).attr('cy', rand(0,900))
        .on('end', steps[rand(0,2)]);
};

const shrink = () => {
    circle
        .transition().duration(rand(1, 1500)).delay(-50)
        .attr('r', rand(1,900))
        .on('end', steps[rand(0,2)]);
};

const steps = [grow, move, shrink];

const circle = begin();
steps[rand(0,2)]();
