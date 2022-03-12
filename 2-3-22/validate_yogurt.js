// // const today = Date.now();
// const today = new Date();
// console.log(today.getDate());
// console.log(today.getDate() + 1)

const getNextDate = (startDate) => {
  return new Date(new Date(startDate).setDate(startDate.getDate() + 1));
  // return new Date(new Date(Date.now()).setDate(startDate.getDate() + 1));
};

const yearStart = new Date('1/1/2022');
const today = new Date(Date.now());
// const tomorrow = new Date(new Date(Date.now()).setDate(today.getDate() + 1));
const tomorrow = getNextDate(today);

// console.log(yearStart);
// console.log(today);
// console.log(tomorrow);

let currentDate = yearStart;
while (currentDate < tomorrow) {
  console.log(currentDate);
  currentDate = getNextDate(currentDate);
}
console.error('end of loop');