import React from 'react';
import * as d3 from 'd3';

const Chart = () => {
    console.log(React);
    console.log(d3);
    const canvas = d3.select("#app");
    console.log(canvas);
    const svg = canvas.append('svg').attr('width', 1200).attr('height', 800);
    svg.append('rect').attr('x', 0).attr('y', 0).attr('width', 444).attr('height', 22).attr('fill', '#c14b4b')
    svg.append('rect').attr('x', 0).attr('y', 24).attr('width', 544).attr('height', 22).attr('fill', '#c14b4b')
    svg.append('rect').attr('x', 0).attr('y', 48).attr('width', 422).attr('height', 22).attr('fill', '#c14b4b')


    return (
        <h2>hiiiii</h2>
    );
};

export default Chart;