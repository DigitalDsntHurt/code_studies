const d3 = require("d3");

const canvas = d3.select('#canvas').append('svg').attr('width', 1200).attr('height', 800);

const drawRect = (x, y) => {
    canvas.append('rect')
        .attr('y', y)        
        .attr('x', x)
        .attr('width', 44)
        .attr('height', 44)
        .attr('fill', 'black');
};

const calendarData = [
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
];

// manually iterate over the calendar data and draw rectangles for each day
calendarData.forEach((week, weekIdx) => {
    week.forEach((day, dayIdx) => {
        drawRect(dayIdx + (55 * dayIdx), weekIdx + (55 * weekIdx));
    });
});