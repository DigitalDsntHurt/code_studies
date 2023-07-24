const life = [];

const birthdate = new Date('1990', '07', '08');
const desiredage = 111;

// find first date of birth month
// start at first date of birth month
// // add each date into a week
// // add each complete week into a month
// // add each complete month into life

const firstDateOfBirthMonth = new Date('1990', '01', '08');
let currentDate = firstDateOfBirthMonth;
// let currentWeek = [];
let currentMonth = [];

while (currentDate < new Date()) {
    const nextDate = new Date(currentDate.getDate() + 1);
    currentDate.setDate(currentDate.getDate() + 1)
    if (nextDate.getMonth() !== currentDate.getMonth()) {
        life.push(currentMonth)
        currentMonth = [];
    }
    currentMonth.push(currentDate);
};

export default life;