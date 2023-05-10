const d3 = require("d3");

const data = [1,2,3,4,5,6,7,8];

const canvas = d3.select('#canvas').append('svg').attr('width',800).attr('height',400);

canvas.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
        .attr('x',(d,i) => i * 8).attr('y',22)
        .attr('width',4).attr('height',4)
        .attr('fill','blue')

canvas.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
        .attr('cx',44).attr('cy',(d,i) => 222 + i * 12)
        .attr('r',4)
        .attr('fill','#800020')

canvas.selectAll('.divvee')
    .data(data)
    .enter()
    .append('foreignObject')
        .attr('x',(d,i) => 111 + i * 77).attr('y',(d,i) => 366 + i * -22)
        .classed('divvee', true)

// this one doesn't work
// in d3, you cannot simply append a div to and svg
// canvas.selectAll('.actual-div')
//     .data(data)
//     .enter()
//     .append('div')
//         .attr('x',(d,i) => i * -39).attr('y',(d,i) => i * 33)
//         .classed('actual-div', true)


// const foreignObject = canvas.selectAll('foreignObject')
// foreignObject.selectAll('.actual-div')
//     .data(data)
//     .enter()
//     .append('xhtml:div')
//         .attr('x',(d,i) => i * -39).attr('y',(d,i) => 99 + i * 33)
//         .classed('.actual-div', true)

// const foreignObject = canvas.selectAll('foreignObject')
// foreignObject.selectAll('.actual-div')
//     .data(data)
//     .enter()
//     .append(foreignObject)
//         .append('div')
//         .attr('x',(d,i) => i * -39).attr('y',(d,i) => 99 + i * 33)
//         .classed('.actual-div', true)
