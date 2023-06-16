const d3 = require("d3");
const math = require('../../../utils/math');
const colors = require('../../../utils/colors');

const canvasWidth = 1200;
const canvasHeight = 800;
const canvas = d3.select("#canvas").append("svg").attr("width", canvasWidth).attr("height", canvasHeight);


const drawPoc = () => {
    const poc = canvas.append('circle')
        .attr('cx', math.rand(0,canvasWidth))
        .attr('cy', math.rand(0,canvasHeight))
        .attr('r', math.rand(2,88))
        .attr('fill', colors.rand());
    return poc;
};

flexPoc = (poc) => {
    poc
        .transition()
        .delay(math.rand(888, 8888))
        .duration(math.rand(0, 4444))
        .attr('r', math.rand(2, 111))
};

// pulsePoc = (poc) => {
//     console.log(poc);
//     const transition = poc.transition()
//         .delay(math.rand(888, 8888))
//         .duration(math.rand(0, 4444))
//         .attr('r', math.rand(2, 111))
//         // .on('end', pulsePoc(newPoc));
//     const newPoc = transition.node();
//     transition.on('end', pulsePoc(newPoc));
// };
// pulsePoc(drawPoc());

const drawPox = () => {
    let iteration = 0;
    while (iteration < math.rand(44, 444)) {
    // while (iteration < 4) {
        // pulsePoc(drawPoc());
        flexPoc(drawPoc());
        iteration++;
    }
};

drawPox();
