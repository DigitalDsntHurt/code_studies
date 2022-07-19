const fs = require("fs");

const monthNameDict = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const dayOfWeekNameDict = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const previousDate = (date) => {
  const prevDate = new Date(date.getTime());
  prevDate.setDate(date.getDate() - 1);
  return prevDate;
};

const nextDate = (date) => {
  const nextDate = new Date(date.getTime());
  nextDate.setDate(date.getDate() + 1);
  return nextDate;
};

const findMostRecentMonday = () => {
  const today = new Date();
  let monday = today;
  while (dayOfWeekNameDict[monday.getDay()] !== "Monday") {
    monday = previousDate(monday);
  }
  return monday;
};

const findNearestSunday = () => {
  const today = new Date();
  let sunday = today;
  while (dayOfWeekNameDict[sunday.getDay()] !== "Sunday") {
    sunday = nextDate(sunday);
  }
  return sunday;
};

const getAllDatesOfCurrentWeek = () => {
  const weekDates = [];
  const today = new Date();
  let currentDate = findMostRecentMonday();
  weekDates.push(currentDate);
  while (dayOfWeekNameDict[currentDate.getDay()] !== "Sunday") {
    currentDate = nextDate(currentDate);
    weekDates.push(currentDate);
  }
  return weekDates;
};
const formatMonth = (monthNum) => {
  if (String(monthNum).length === 1) {
    return `0${monthNum + 1}`;
  }
  return `${monthNum + 1}`;
};

const monday = findMostRecentMonday();
const weekFileName = `week${formatMonth(
  monday.getMonth()
)}:${monday.getDate()}:${monday.getFullYear()}.md`;

let fileText = "# All Week \n\n***";
const weekDates = getAllDatesOfCurrentWeek();
weekDates.forEach((date) => {
  fileText = fileText.concat(
    `\n\n# ${
      monthNameDict[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`
  );
});

fs.appendFile(`/Users/nick.smith/jot/2022/${weekFileName}`, fileText, () => {});
