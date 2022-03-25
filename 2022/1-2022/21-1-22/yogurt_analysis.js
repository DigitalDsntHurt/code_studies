// const file =
// const data = JSON.parse(file);

const data = require('/Users/nick.smith/jot/2022/yoga_practice_journal_2022.json');
const dayOfYear = () => {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  console.log('Day of year: ' + day);
  return day;
}
let totalMins = 0

data.forEach(entry => {
  totalMins += entry.mins;
})

console.log(totalMins, "total mins in 2022 so far");
console.log("that's", totalMins / 60, "hours");
console.log("or an average of", totalMins / dayOfYear(), "mins per day")
// console.log(dayOfYear())