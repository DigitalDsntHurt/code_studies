const xdate = require("xdate");

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const generateCalendar = (birthDate, desiredAge = 88) => {
    // calculate first date of birth month
    const birthMonth = xdate(birthDate).getMonth();
    const birthYear = xdate(birthDate).getFullYear();
    const firstOfBirthMonth = xdate(birthYear, birthMonth, 01);
    console.log(firstOfBirthMonth);
    console.log(firstOfBirthMonth.getDay());
    console.log(weekDays[firstOfBirthMonth.getDay() - 1]);

    // calculate death date

};

const birthDate = xdate('1990', '03', '08')
const desiredAge = 111;
// console.log(birthDate);


generateCalendar(birthDate);
// generateCalendar(birthDate, desiredAge);