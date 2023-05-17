const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 400).attr('height', 200);

// append one circle to the dom for every element in an array
const days = [1,2,3,4,5,6,7];

// canvas.selectAll('circle')
//     .data(days)
//     .enter()
//     .append('circle').attr('r',8).attr('fill','purple')
//         .attr('cx', (d,i) => 22 + i * 16).attr('cy', d => d * 11)

// append one invisible container to the dom for every element in an array
// append one circle to the dom for each inner child 

const weeks = [
    days,
    days,
    days,
    days,
    days,
    days,
    days,
];

// canvas.selectAll('rect')
//     .data(weeks)
//     .enter()
//     .append('rect').attr('class', 'week')
//         .attr('y', (d,i) => i * 22 )
//         .data(d => d)
//         .enter()
//         .append('circle').attr('r',8).attr('fill','green')

canvas.selectAll('rect')
    .data(weeks)
    .enter()
    .append('rect').attr('width',388).attr('height',22).attr('fill','transparent').attr('stroke','blue')
        .attr('x', 8)
        .attr('y', (d,i) => i * 44)
    .selectAll('circle')
        .data(d => d)
        .enter()
            .append('circle').attr('r',4).attr('fill','green')
                .attr('cx', (d,i) => i * 8)
                .attr('cy', 8)
                // .attr(
                //     'x', 
                //     (d, i, j) => {
                //         console.log('xd : ', d);
                //         console.log('xi : ', i);
                //         console.log('xj : ', j);
                //         console.log('====');
                //         return d
                //     }
                // )
                // .attr(
                //     'y', 
                //     d => {
                //         console.log('y : ', d);
                //         return d
                //     }
                // )