//   Q-7
document.write(`Q-7  Write a program that tests whether it's before noon and 
        alert “Its AM” else “its PM”.<br><br>`);
let todayTime = new Date();
let hours = todayTime.getHours();
let amOrPm = hours < 12 ? "PM" : "AM";
document.write(`Time Is  : <b>${amOrPm}</b> <br>`);
// alert(amOrPm);

document.write("<br> <hr>");

document.write(`Q-8 Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named 
            laterDate..<br><br>`);
const laterDate = new Date(2020, 11, 31);
document.write(`Later Date is  : <b>${laterDate}</b> <br>`);
document.write("<br> <hr>");

//   Q-9
document.write(`Q-9 Create a date object of the starting date of this Ramadan 
        and alert the number of days past since 1st Ramadan?
        Note: 1st Ramadan was on June 18, 2015<br><br>`);

const ramadanStart = new Date();
const firstRamadan = new Date(2015, 5, 18);
const daysSinceFirstRamadan = Math.floor(
  (ramadanStart - firstRamadan) / (1000 * 60 * 60 * 24)
);
document.write(
  `Since Now <b>${daysSinceFirstRamadan}</b> days have passed since 1st ramadan , 2015`
);
document.write("<br> <hr>");

document.write(`Q-10 Write a program that displays current date and time in 
        your browser.<br><br>`);
const referenceDate = new Date("December 05, 2015");
document.write(`On Reference Date : <b> ${referenceDate}</b> <br>`);
const beginningOf2015 = new Date("January 1, 2015");
const secondsElapsed = (beginningOf2015 - referenceDate) / 1000;
document.write(
  `<b>${secondsElapsed}</b>Seconds had passed since the beginning of 2015`
);
document.write("<br> <hr>");