// const dateFns = require("date-fns");
// console.log(dateFns);

// const addYears = require("date-fns/addYears");
// import { addYars } from 

const { addYears } = require('date-fns');
console.log(addYears);

const birthDate = new Date('1990', '03', '08');
const desiredAge = 111;

const generateLife = (birthDate, desiredAge) => {
    console.log('birth date : ', birthDate);
    console.log('desired age : ', desiredAge);
    console.log('death date : ', addYears(birthDate, desiredAge));
};

generateLife(birthDate, desiredAge);