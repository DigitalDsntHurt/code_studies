const canvas = document.getElementById('canvas');

const week = document.createElement('div')
week.classList.add( 'week');
canvas.appendChild(week);

const drawSauare = (x, y) => {
    const daySquare = document.createElement('div')
    daySquare.classList.add( 'day');
    week.appendChild(daySquare);
};

drawSauare()
drawSauare()


