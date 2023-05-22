const weeks = [
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
];

const canvas = document.getElementById('canvas');
// console.log(canvas);

const screen = document.createElement('div');
screen.classList.add('screen');
canvas.appendChild(screen);

const writeToScreen = (text) => {
    const textNode = document.createTextNode('wrote me to screen');
    screen.appendChild(textNode);
};

// const doIt = () => {
//     alert('you did it');
// }

weeks.forEach(week => {
    const weekDiv = document.createElement('div');
    weekDiv.classList.add('week');
    canvas.appendChild(weekDiv)
    week.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.setAttribute('onmouseover', 'writeToScreen()');
        weekDiv.appendChild(dayDiv);
    });
});
