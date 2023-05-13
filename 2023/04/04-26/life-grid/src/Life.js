import './Life.css';
import XDate from 'xdate';

const getWeekMonday = (date) => {
    if (date.getDay() === 1) return date;
    while (date.getDay() !== 1) {
        return getWeekMonday(new XDate(date.addDays(-1)));
    }
};

const getWeekSunday = (date) => {
    if (date.getDay() === 0) return date;
    while (date.getDay() !== 0) {
        return getWeekSunday(new XDate(date.addDays(1)));
    }
    
};

const createLife = (birthDate, desiredAge) => {
    const life = [];
    const currentDate = getWeekMonday(birthDate);
    const deathDate = new XDate(new XDate(birthDate).addYears(desiredAge));
    const endDate = getWeekSunday(deathDate);

    let week = [];
    while (currentDate <= endDate) {
        week.push(new XDate(currentDate));
        if (currentDate.getDay() === 0) {
            life.push(week);
            week = [];
        }
        currentDate.addDays(1);
    }

    return life;
};

const birthDate = new XDate("1990", "03", "08");
const desiredAge = 111;
const lifeData = createLife(birthDate, desiredAge);
console.log(lifeData);

const Day = () => {
    return (
        <div className="day"></div>
    )
};

const Life = () => {
    return (
        <>
            <h1>dis my life</h1>
            <Day />
        </>
    );
};

export default Life;