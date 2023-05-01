const canvas = document.getElementById('canvas');

// make canvas an svg
// const svg = document.createElement('svg');
// svg.classList.add('')
// svg.setAttribute("width", "800");
// svg.setAttribute("height", "800");
// svg.setAttribute("fill", "black");
// canvas.appendChild(svg);

// draw a step at a particular svg coordinate
// const step = () => {
//     const step = document.createElement('div');
//     step.classList.add('step');
//     canvas.appendChild(step);
// }
// step();

// const step = (x, y) => {
//     const step = document.createElement('rect');
//     step.classList.add('step');
//     step.setAttribute('x', x);
//     step.setAttribute('y', y);
//     step.setAttribute('width', 8);
//     step.setAttribute('height', 2);
//     step.setAttribute('fill', 'black');
//     svg.appendChild(step);
// }
// step(88,88);



const anotherCanvas = document.createElement('div');
anotherCanvas.classList.add('another-canvas');
canvas.appendChild(anotherCanvas);

// const firstStep = document.createElement('div');
// firstStep.classList.add('step');
// firstStep.style.position = "absolute";
// firstStep.style.left = "11px";
// firstStep.style.top = "101px";
// anotherCanvas.append(firstStep);

// const secondStep = document.createElement('div');
// secondStep.classList.add('step');
// secondStep.style.position = "absolute";
// secondStep.style.left = "22px";
// secondStep.style.top = "111px";
// anotherCanvas.append(secondStep);


//
// // 
//
// const makeStep = (x,y) => {
//     const step = document.createElement('div');
//     step.classList.add('step');
//     step.style.position = "absolute";
//     step.style.left = "8px";
//     step.style.top = "80px";
//     anotherCanvas.append(step);
// };
// makeStep(0,0);

const makeStep = (x,y) => {
    const step = document.createElement('div');
    step.classList.add('step');
    step.style.position = "relative";
    step.style.left = `${x}px`;
    step.style.top = `${y}px`;
    anotherCanvas.append(step);
};

// makeStep(8,422);
// makeStep(16,414);

let numOfSteps = 22;
let firstStepX = 8;
let firstStepY = 422;
while(numOfSteps > 0) {
    // setTimeout(() => () => makeStep(firstStepX,firstStepY), 250);
    makeStep(firstStepX,firstStepY);

    firstStepX += 8;
    if (numOfSteps % 2 == 0) {
        firstStepY += 8;
    } else {
        firstStepY -= 8;
    }
    numOfSteps -= 1;
}