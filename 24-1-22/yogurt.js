// const jsonData = import('/Users/nick.smith/jot/2022/yoga_practice_journal_2022.json');
const jsonData = require('/Users/nick.smith/jot/2022/yoga_practice_journal_2022.json');

// console.log(jsonData)

// count total number of minutes
let mins = 0;
jsonData.forEach(entry => {
  mins += entry.mins;
});

console.log(mins, "total minutes");
console.log(mins / 60, "total hours");

// count number of total entries
console.log(jsonData.length);

// count number of unique days
const days = [];
jsonData.forEach(entry => {
  const date = entry.date;
  if (!days.includes(date)) {
    days.push(date);
  }
});

console.log('recoded entries on', days.length, 'days. here they are:');
console.log(days);

// build a hash of minutes per day
const minsPerDay = {};
jsonData.forEach(entry => {
  date = entry.date;
  minsPerDay[date] = minsPerDay[date] + entry.mins || entry.mins
});
console.log(minsPerDay);

// count total number of live in person classes
let liveClasses = 0;
jsonData.forEach(entry => {
  if (entry.detail.includes("live in person")) {
    liveClasses++;
  }
});
console.log(liveClasses, "live in person classes");

// count total number of links
let linksCount = 0;
jsonData.forEach(entry => {
  if (entry.detail.includes('http')) {
    linksCount++;
  }
});
console.log(linksCount, "online classes")

// frequency counter for number of days per mintue count
let daysPerMinuteCount = {};
jsonData.forEach(entry => {
  daysPerMinuteCount[entry.mins] = daysPerMinuteCount[entry.mins]++ || 1
});
console.log(daysPerMinuteCount)
