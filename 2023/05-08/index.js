const d3 = require("d3");
const colors = require('../../utils/colors');
const math = require('../../utils/math');


const r = math.rand(4,44);
const cx = math.rand(88,218);
const cy = math.rand(88,218);

const canvas = d3.select('#canvas').append('svg').attr('width','444').attr('height','444').attr('border','black');
const dot = canvas.append('circle').attr('r',r).attr('cx',cx).attr('cy',cy).attr('fill',colors.rand());

const jiggleDistance = (currentCoordinate) => {
    return math.rand(1,19) / 100 * currentCoordinate
};

const jd = jiggleDistance(cx);

const jiggleRight = () => {
    dot.transition().duration(math.rand(2,800))
        .attr('cx',cx + jd)
        // .on('end', jiggleLeft)
        .on('end', nextJiggle())
};

const jiggleLeft = () => {
    dot.transition().duration(math.rand(2,800))
        .attr('cx',cx - jd)
        // .on('end', jiggleRight)
        .on('end', nextJiggle())
};

const jiggleUp = () => {
    dot.transition().duration(400)
        .attr('cy',cy - jd)
        // .on('end', jiggleDown)
        .on('end', nextJiggle())
};

const jiggleDown = () => {
    dot.transition().duration(400)
        .attr('cy',cy + jd)
        // .on('end', jiggleUp)
        .on('end', nextJiggle())
};

const jiggles = [jiggleRight, jiggleLeft, jiggleUp, jiggleDown];
const nextJiggle = () => {
    return jiggles[math.rand(0,jiggles.length - 1)];
};

// jiggleLeft();
// jiggleDown();

nextJiggle()();