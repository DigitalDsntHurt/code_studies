const d3 = require("d3");
const xdate = require("xdate");

const getWeekMonday = (date) => {
    if (date.getDay() === 1) return date;
    while (date.getDay() !== 1) {
        return getWeekMonday(new xdate(date.addDays(-1)));
    }
};
// console.log(getWeekMonday(new xdate())); // apr 17
// console.log(getWeekMonday(new xdate(2023, 03, 16))); // apr 10

const getWeekSunday = (date) => {
    if (date.getDay() === 0) return date;
    while (date.getDay() !== 0) {
        return getWeekSunday(new xdate(date.addDays(1)));
    }
    
};
// console.log(getWeekSunday(new xdate())); // apr 23
// console.log(getWeekSunday(new xdate(2023, 03, 16))); // apr 16

const createLife = (birthDate, desiredAge) => {
    const life = [];
    const currentDate = getWeekMonday(birthDate);
    const deathDate = new xdate(new xdate(birthDate).addYears(desiredAge));
    const endDate = getWeekSunday(deathDate);

    let week = [];
    while (currentDate <= endDate) {
        console.log(currentDate);
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
console.log(createLife(birthDate, desiredAge));
