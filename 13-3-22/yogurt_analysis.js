const jsonData = require('/Users/nick.smith/jot/2022/yoga_practice_journal_2022.json');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getNextDate = (startDate) => {
  return new Date(new Date(startDate).setDate(startDate.getDate() + 1));
};

const yearStart = new Date('1/1/2022');
const today = new Date(Date.now());
const tomorrow = getNextDate(today);

let currentDate = yearStart;
let thisMonth = {
  practiceDays: 0,
  practiceMinsPerDayAvg: 0,

  praciceMins: 0,
  practiceSessions: 0,
  practiceMinsPerSessionAvg: 0,

  classMins: 0,
  classSessions: 0,
  classMinsPerSessionAvg: 0,

  freeFlowMins: 0,
  freeFlowSessions: 0,
  freeFlowMinsPerSessionAvg: 0,
}
while (currentDate < tomorrow) {
  // print month
  currentMonthNum = currentDate.getMonth();
  if (currentDate.getDate() === 01) {
    const monthName = months[currentDate.getMonth()];
    console.log(monthName)
  }

  // ~ // ~ // ~ // ~ // ~ // ~ // ~ //
  console.log(currentDate);
  // print total # of practice days
  // print average minutes per day

  // print total # of practice minutes
  // print total # of practice sessions
  // print average minutes per practice session

  // print total # of practice classes
  // print total minutes of practice classes
  // print average minutes per practice class

  // print total # of free flows
  // print total mintues of free flows
  // print average minutes per free flow

  // ~ // ~ // ~ // ~ // ~ // ~ // ~ //
  currentDate = getNextDate(currentDate);
}

console.log("\n\n\n\n\n\n\n\n");

const getEntriesForOneMonth = monthNum => {
  const monthName = months[monthNum];
  return jsonData.filter(entry => (entry.date.includes(monthName)));
};

const getPracticesCount = practices => {
  return practices.filter(entry => (entry.mins > 0)).length;
};

const getPracticeDaysCount = practices => {
  const practiceDates = practices.filter(entry => (entry.mins > 0)).map(entry => (entry.date));
  let uniqueDates = [];
  practiceDates.forEach(date => {
    if (!uniqueDates.includes(date)) {
      uniqueDates.push(date)
    }
  });
  return uniqueDates.length
};

const getTotalPracticeMins = practices => {
  return practices.filter(entry => (entry.mins > 0)).reduce((accumulator, entry) => accumulator + entry.mins, 0);
};

const minsToHours = mins => (mins / 60);

const monthEntries = getEntriesForOneMonth(0)
console.log(getPracticeDaysCount(monthEntries));
console.log(getPracticesCount(monthEntries));
console.log(getTotalPracticeMins(monthEntries));
console.log(minsToHours(getTotalPracticeMins(monthEntries)));
// console.log('avg mins per day:',)
console.log('avg mins per practice day:',)
console.log('avg mins per practice:')