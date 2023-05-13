const d3 = require("d3");

const w = window.innerWidth;
const h = window.innerHeight;

const canvas = d3.select('#canvas').append('svg').attr('width', w).attr('height', h);

const calendarData = [
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
];

// .bind
// .data
// .enter

const g = canvas.selectAll(".week")
.data(calendarData)
.enter()
.append("g")
.attr("class", "week");

g.selectAll("day")
    .data(function(d){
    return d;
    })
    .enter()
    .append("circle")
    .attr("class", "day")
//   .attr("cx", function(d){
//     return x(d[0]);
//   })
//   .attr("cy", function(d){
//     return y(d[1]);
//   })
    .attr('cx', (d, i) => d * i)
    .attr('cy', 22)
    .attr("r", 8)
    .style("fill", 'blue');

// const stuff = canvas.selectAll('rect')
//     .data(calendarData)
//     .enter()
//     .append('rect')
//     .attr('fill', 'black')
//     .attr('width', 8)
//     .attr('height', 8);

// console.log(stuff);