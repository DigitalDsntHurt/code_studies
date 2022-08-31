const jsonData = require("/Users/nick.smith/jot/yogurt/yoga_practice_journal_2022.json");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// HELPERS __ start
const round = (num) => Math.round(num * 100) / 100;

const minsToHours = (mins) => mins / 60;

const getDaysInMonthCount = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const getNextDate = (startDate) => {
  return new Date(new Date(startDate).setDate(startDate.getDate() + 1));
};
//HELPERS __ end

const yearStart = new Date("1/1/2022");
const today = new Date(Date.now());
const thisYear = yearStart.getFullYear();
const tomorrow = getNextDate(today);

// iterate over days in year so far
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
};
// while (currentDate < tomorrow) {
// print month
// currentMonthNum = currentDate.getMonth();
// if (currentDate.getDate() === 01) {
// const monthName = months[currentDate.getMonth()];
// console.log(monthName)
// }

// ~ // ~ // ~ // ~ // ~ // ~ // ~ //
// console.log(currentDate);
// [x] print total # of practice days
// [x] print average minutes per day

// [x] print total # of practice minutes
// [x] print total # of practice sessions
// [x] print average minutes per practice session

// [x] print unique # of practice classes
// [x] print total # of practice classes
// [x] print total minutes of practice classes
// [x] print average minutes per practice class

// [x] print total # of free flows
// [x] print total mintues of free flows
// [x] print average minutes per free flow

// ~ // ~ // ~ // ~ // ~ // ~ // ~ //
// currentDate = getNextDate(currentDate);
// }

const getPracticeDaysCount = (practices) => {
  const practiceDates = practices
    .filter((entry) => entry.mins > 0)
    .map((entry) => entry.date);
  let uniqueDates = [];
  practiceDates.forEach((date) => {
    if (!uniqueDates.includes(date)) {
      uniqueDates.push(date);
    }
  });
  return uniqueDates.length;
};

const getPracticesByMonthNum = (monthNum) => {
  const monthName = months[monthNum];
  return jsonData.filter(
    (entry) => entry.date.includes(monthName) && entry.mins > 0
  );
};

const countPractices = (practices) => {
  return practices.length;
};

const countPracticeMins = (practices) => {
  return practices.reduce((sum, entry) => sum + entry.mins, 0);
};

// PRINT MONTHLY PRACTICE STATS

months.forEach((month, monthIdx) => {
  const daysInMonth = getDaysInMonthCount(monthIdx + 1, thisYear);
  const monthPractices = getPracticesByMonthNum(monthIdx);
  const practiceDays = getPracticeDaysCount(monthPractices);
  // const monthEntries = getEntriesByMonthNum(monthIdx);
  // const practiceSessions = getPracticesCount(monthPractices);
  const practiceSessions = countPractices(monthPractices);
  const practiceMins = countPracticeMins(monthPractices);
  const practiceHrs = round(minsToHours(countPracticeMins(monthPractices)));
  // free flows
  const freeFlowPractices = monthPractices.filter((entry) =>
    entry.detail.includes("free flow")
  );
  const freeFlowPracticesCount = countPractices(freeFlowPractices);
  const freeFlowPracticeMins = countPracticeMins(freeFlowPractices);
  const freeFlowPracticeHours = round(minsToHours(freeFlowPracticeMins));
  // online classes
  const onlineClassPractices = monthPractices.filter((entry) =>
    entry.detail.includes("http")
  );
  const onlineClassPracticesCount = countPractices(onlineClassPractices);
  const onlineClassPracticeMins = countPracticeMins(onlineClassPractices);
  const onlineClassPracticeHours = round(minsToHours(onlineClassPracticeMins));

  if (monthPractices.length > 0) {
    console.log();
    console.log("====", month, "====");
    // console.log(`${practiceDays} practice days (=${round(practiceDays / daysInMonth * 100)}% of ${daysInMonth} days in ${month})`);
    console.log(
      practiceDays,
      "practice days (=",
      round((practiceDays / daysInMonth) * 100),
      "% of",
      daysInMonth,
      "days in",
      month,
      ")"
    );
    console.log(practiceMins, "practice mins (=", practiceHrs, "hrs)");
    console.log(practiceSessions, "practice sessions");
    console.log(round(practiceMins / practiceDays), "avg mins per day");
    console.log(round(practiceMins / practiceSessions), "avg mins per session");

    // free flows
    console.log();
    console.log(freeFlowPracticesCount, "free flow practices");
    console.log(
      freeFlowPracticeMins,
      "free flow practice mins (=",
      freeFlowPracticeHours,
      "hrs)"
    );
    console.log(
      round(freeFlowPracticeMins / freeFlowPracticesCount),
      "avg mins per free flow"
    );

    // online classes
    // console.log();
    // console.log(onlineClassPracticesCount, 'online classes');
    // console.log(onlineClassPracticeMins, 'online class mins (=', onlineClassPracticeHours, 'hrs)');
    // console.log(round(onlineClassPracticeMins / onlineClassPracticesCount), 'avg mins per online class');
  }
});
