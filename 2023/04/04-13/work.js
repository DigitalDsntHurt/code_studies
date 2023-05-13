const date = require('xdate');

const birthDate = new date(1990, 03, 08).clearTime();
const today = new date().clearTime();
const desiredDeathDate = new date(birthDate.addYears(111));

// console.log(birthDate);
// console.log(today);
// console.log(desiredDeathDate);

const getBirthMonday = (dateOfBirth) => {
    if (dateOfBirth.getDay() === 1) return dateOfBirth;
    while(dateOfBirth.getDay() !== 1) {
        dateOfBirth = dateOfBirth.addDays(-1);
        return getBirthMonday(dateOfBirth);
    }
};
// console.log(getBirthMonday(birthDate));

const getDeathSunday = (dateOfDeath) => {
    if (dateOfDeath.getDay() == 0) return dateOfDeath;
    while(dateOfDeath.getDay() !== 0) {
        dateOfDeath = dateOfDeath.addDays(1);
        return getDeathSunday(dateOfDeath);
    }
};
// console.log(getDeathSunday(desiredDeathDate));

const compileLife = (dateOfBirth, dateOfDeath) => {
    const lifeWeeks = [];
    let currentWeek = [];
    let currentDay = getBirthMonday(dateOfBirth);
    const deathSunday = getDeathSunday(dateOfDeath);

    while (currentDay <= deathSunday) {
        currentWeek.push(currentDay);
        currentDay = new date(currentDay.addDays(1));
        while(currentDay.getDay() !== 1) {
            currentWeek.push(currentDay);
            currentDay.addDays(1);
        }
        lifeWeeks.push(currentWeek);
        currentWeek = [];
    }
    return lifeWeeks;
}

console.log(compileLife(birthDate, desiredDeathDate));