const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 1200).attr('height', 800);

canvas.append('text').text('yollaquwambkeekee')
    .attr('x',888).attr('y', 88)
    .attr('fill-opacity', 0)
.transition()
    .duration(8000)
    .attr('fill-opacity', 1)
.transition()
    .duration(8000)
    .attr('fill-opacity', 0)
.transition()
    .duration(8000)
    .attr('fill-opacity', 1)


const text = canvas.append('text').text('blinking text')
    .attr('x',288).attr('y', 444)
    .attr('fill-opacity', 0)

const fadeIn = () => {
    text.transition()
        .duration(1000)
        .attr('fill-opacity', 1)
    .on('end', fadeOut)
};

const fadeOut = () => {
    text.transition()
        .duration(1000)
        .attr('fill-opacity', 0)
        .on('end', fadeIn)
};

fadeIn();
// fadeOut(text);


const circle = canvas.append('circle').attr('r', 0).attr('fill', '#45609a').attr('cx', 666).attr('cy', 666);

const shrink = node => {
    node.transition().duration(2000)
        .attr('r', 0)
        .on('end', () => expand(node));
};

const expand = node => {
    node.transition().duration(8000)
    .attr('r', 444)
    .on('end', () => shrink(node));
};

expand(circle);


// const flash = (node) => {
//     fadeOut(node);
// };
// flash(text);

// const flash = node => {
//     node.attr('fill-opacity', 1)
//     node.transition().duration(2000)
//         .attr('fill-opacity', 0)
        
// };

// flash(text);