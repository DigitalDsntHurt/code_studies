const d3 = require("d3");
const xdate = require("xdate");

// Generate life array

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


// draw to dom 
const w = window.innerWidth;
const h = window.innerHeight;
const canvas = d3.select('#canvas').append('svg').attr('width', w).attr('height', h);

const week = canvas.selectAll('.week')
    .data(lifeData)
    .enter().append('g')
        .attr('class', 'week')
        .attr("transform", function (d, i) {
            return `translate(0 ${i * 11})`;
          });

const day = week.selectAll('.day')
    .data((d,i) => { return d; })
    .enter().append('rect')
        .attr('class', '.day')
        .attr('x', (d,i) => { return i * 11 })
        .attr('y', 0)
        .attr('width', 8)
        .attr('height', 8)
        .attr('fill', 'orange');