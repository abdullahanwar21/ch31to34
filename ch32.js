document.write(`Q-4 Write a program that displays a message “It’s Fun day” if 
its Saturday or Sunday today.<br><br>`);
const fullDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let findFunDay = fullDays[new Date().getDay()];
if (findFunDay === "Sunday" || findFunDay === "Thursday") {
  document.write(`Today is Funday : <b>${findFunDay}</b>`);
} else {
  document.write(`Today is Not Funday: <b>${findFunDay}</b>`);
}
document.write("<br> <hr>");

document.write(`Q-5  Write a program that shows the message “First fifteen 
  days of the month” if the date is less than 16th of the month 
  else shows “Last days of the month”<br><br>`);
let getMonthDate = new Date().getDate();
// getMonth = 16;
if (getMonthDate < 16) {
  document.write(`First Fifteen Days Of The Months : <b>${getMonthDate}</b>`);
} else {
  document.write(`Last Days of The Month : <b>${getMonthDate}</b>`);
}
document.write("<br> <hr>");

//   Q-6
document.write(`Q-6 Write a program that displays current date and time in 
  your browser.<br><br>`);

const now = new Date();
document.write(`Current Date : <b>${now}</b> <br>`);
const msSince1970 = Date.now();
document.write(
  `Elapsed MilliSeconds Since January 1,1970 : <b>${msSince1970}</b> <br>`
);
const minutesSince1970 = Math.floor(msSince1970 / (1000 * 60));
document.write(
  `Elapsed Minutes Since January 1,1970 : <b>${minutesSince1970}</b> <br>`
);
document.write("<br> <hr>");
