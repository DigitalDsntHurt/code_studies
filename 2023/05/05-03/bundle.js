const calendarData = [
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
    ['mon','tue','wed','thu','fri','sat','sun'],
];

const canvas = document.getElementById('canvas');
const yearContainer = document.createElement('div');
yearContainer.classList.add('year');
canvas.appendChild(yearContainer);

const drawWeek = (year) => {
    const week = document.createElement('div');
    week.classList.add('week');
    year.appendChild(week);
    return week;
};

const drawDay = (week) => {
    const day = document.createElement('div');
    day.classList.add('day');
    week.appendChild(day);
};

calendarData.forEach(week => {
    const wk = drawWeek(yearContainer);
    week.forEach(day => {
        drawDay(wk);
    });
});
