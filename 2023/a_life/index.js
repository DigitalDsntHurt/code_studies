// LIB
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayOfWeek = (date) => {
    return daysOfWeek[date.getDay()]
};
// console.log(getDayOfWeek(new Date(1990, 3, 8)));

const subtractOneDay = (date) => {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 1
    );
};
// console.log(subtractOneDay(new Date(1990, 3, 8)));

const getBirthMonday = (birthDate) => {
    let birthDow = getDayOfWeek(birthDate);
    if (birthDow === 'Mon') return birthDate;

    while (birthDow !== 'Mon') {
        birthDate = subtractOneDay(birthDate);
        birthDow = getDayOfWeek(birthDate);
    }
    return birthDate;
};
// console.log(getBirthMonday(new Date(1990, 3, 8)));


// DATES
const birthDate = new Date(1990, 3, 8);
const birthMonday = getBirthMonday(birthDate);

const today = new Date();

const ageIWantToBe = 111;
const calculatedDesiredDeathDate = new Date(birthDate.getFullYear() + ageIWantToBe, birthDate.getMonth(), birthDate.getDate());

console.log(birthDate);
console.log(birthMonday);
console.log(today);
console.log(calculatedDesiredDeathDate);
console.log('====');
