import XDate from 'XDate';

const generateCalendar = (birthDate, desiredAge = 88) => {
    // calculate first date of birth month
    const birthMonth = XDate(birthDate).getMonth();
    console.log(birthMonth);
    // calculate death date

};

const birthDate = XDate('1990', '04', '08')
const desiredAge = 111;
console.log(birthDate);


// generateCalendar(birthDate);
generateCalendar(birthDate, desiredAge);

export default generateCalendar;
