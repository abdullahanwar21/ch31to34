document.write(`Q-1 Write a program that displays current date and time in 
your browser.<br><br>`);
let currentDate = new Date();
document.write(currentDate + "<br>");
document.write("<br> <hr>");
document.write(`Q-2  Write a program that alerts the current month in words. 
For example December...<br><br>`);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = months[new Date().getMonth()];
document.write(`Current Month : <b>${currentMonth}</b>`);
document.write("<br> <hr>");

document.write(`Q-3 Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show 
Sun..<br><br>`);
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDateInAlphabet = days[new Date().getDay()];
document.write(`Current Day : <b>${currentDateInAlphabet}</b>`);
document.write("<br> <hr>");
