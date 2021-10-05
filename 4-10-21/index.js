
const gridSize = 8;

const generateGrid = x => Array(x).fill(Array(x).fill(" "));
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const grid = generateGrid(gridSize);
const randomX = randomBetween(0,gridSize - 1);
const randomY = randomBetween(0,gridSize - 1);

const newArr = Array(gridSize).fill(" ");
newArr[randomY] = 'X';
grid[randomX] = newArr;

console.log(grid);