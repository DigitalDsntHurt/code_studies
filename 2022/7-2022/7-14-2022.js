stringDates = ["Jan 9, 2022", "May 8, 2022", "Jul 10, 2022", "May 8, 2022"];
dateDates = stringDates.map((date) => new Date(date));

// stringDates.forEach((date) => {
//   console.log(date);
// });

// dateDates.forEach((date) => {
//   console.log(date);
// });

// console.log(dateDates[0] > dateDates[1]);
// console.log(dateDates[0] < dateDates[1]);

// dateSet = new Set(dateDates);
// console.log(dateSet);

// LEARNING
// Date objects in javascript are unique
// each instance of a date object seems to have its own place in memory
console.log("each date object in javascript has its own place in memory");
console.log(
  "this makes it hard to check uniqueness from a list of date objects"
);
console.log(new Date("Jan 9, 2022") === new Date("Jan 9, 2022")); // false

console.log("-~-~-~-~-~-~-~-~");

const uniqueDates = (arr) => {
  const uniques = [];

  const times = arr.map((item) => item.getTime());
  times.forEach((time) => {
    if (!uniques.includes(time)) {
      uniques.push(time);
    }
  });

  return uniques.map((time) => new Date(time));
};

console.log(uniqueDates(dateDates));
