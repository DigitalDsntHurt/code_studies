const d3 = require("d3");
const xdate = require("xdate");

// Generate an array of arrays wherein
// each array is one week -- contains 7 dates starting with monday, ending with sunday
// the first week array contains your birth date
// the last week array contains your calculated death date

const getWeekMonday = (date) => {
    if (date.getDay() === 1) return date;
    while (date.getDay() !== 1) {
        return getWeekMonday(new xdate(date.addDays(-1)));
    }
};

const getWeekSunday = (date) => {
    if (date.getDay() === 0) return date;
    while (date.getDay() !== 0) {
        return getWeekSunday(new xdate(date.addDays(1)));
    }
    
};

const createLife = (birthDate, desiredAge) => {
    const life = [];
    const currentDate = getWeekMonday(birthDate);
    const deathDate = new xdate(new xdate(birthDate).addYears(desiredAge));
    const endDate = getWeekSunday(deathDate);

    let week = [];
    while (currentDate <= endDate) {
        week.push(new xdate(currentDate));
        if (currentDate.getDay() === 0) {
            life.push(week);
            week = [];
        }
        currentDate.addDays(1);
    }

    return life;
};

const birthDate = new xdate(1990, 03, 08);
const desiredAge = 111;
const lifeData = createLife(birthDate, desiredAge);
console.log(lifeData);

// Draw each date to the dom as a square
// each row of squares should be one week

// const w = window.innerWidth;
// const h = window.innerHeight;
// const canvas = d3.select('#canvas').append('svg').attr('width', w).attr('height', h);

// const g = canvas.selectAll(".week")
//     .data(lifeDate)
//     .enter()
//     .append("g")
//     .attr("class", "week");

// g.selectAll("day")
//     .data(function(d){
//         console.log(d);
//         return d;
//     })
//     .enter()
//     .append("circle")
//     .attr("class", "day")
//     .attr('cx', (d, i) => d * i)
//     .attr('cy', 22)
//     .attr("r", 8)
//     .style("fill", 'blue');

// revised goal : 
// draw one rectangle for each week of life

const w = window.innerWidth;
const h = window.innerHeight;
const canvas = d3.select('#canvas').append('svg').attr('width', w).attr('height', h);

const week = canvas.selectAll('.week')
    .data(lifeData)
    .enter()
    .append('rect')
    .attr('class', 'week')
    .attr('width', 44)
    .attr('height', 11)
    .attr('fill', 'orange')
    .attr('x', 0)
    .attr('y', (d, i) => { return i * 12 });