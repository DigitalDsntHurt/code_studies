const d3 = require("d3");
const xdate = require("xdate");


const createLife = (birthDate, desiredAge) => {
    const life = [];
    const deathDate = new xdate(new xdate(birthDate).addYears(desiredAge));

    let week = [];
    while (birthDate <= deathDate) {
        // console.log(birthDate);
        week.push(new xdate(birthDate));
        if (birthDate.getDay() === 0) {
            life.push(week);
            week = [];
        }
        birthDate.addDays(1);
    }

    console.log('====');
    console.log(birthDate);
    console.log(desiredAge);
    console.log(deathDate);
    return life;
};


const birthDate = new xdate(1990, 03, 08); //.toTimeString();
const desiredAge = 111;

console.log(createLife(birthDate, desiredAge));