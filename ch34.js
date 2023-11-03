document.write(`Q-11 Create a Date object for the current date and time. 
        Extract the hours, reset the date object an hour ahead and 
        finally display the date object in your browser.<br><br>`);
const newDate1 = new Date();
document.write(`Current Date : <b>${newDate1}</b> <br>`);
const currentHour = newDate1.getHours();
newDate1.setHours(currentHour - 1);
document.write(`1 Hour Ago : <b>${newDate1}</b> <br>`);
document.write("<br> <hr>");

document.write(`Q-12  Write a program that creates a date object and show the 
        date in an alert box that is reset to 100 years back?<br><br>`);

var currentDate2 = new Date();
currentDate2.setFullYear(currentDate2.getFullYear());
document.write("Current Date : <b>" + currentDate2 + "<br>" + "</b>");

currentDate2.setFullYear(currentDate2.getFullYear() - 100);
document.write("Date 100 years back: <b>" + currentDate2 + "</b>");

document.write("<br> <hr>");
document.write(`Q-13  Write a program to ask the user about his age. Calculate 
and show his birth year in your browser.<br><br>`);
let userAge = +prompt('ENter Your Age i"ll Tell You , UR BirthYear !');
let getFullYear = new Date().getFullYear();
getFullYear -= userAge;
document.write(`Your Age is <b>${userAge}</b> <br>`);
document.write(`Your Birth Year is <b>${getFullYear}</b> <br>`);
document.write("<br> <hr>");



document.write(`Q-14  Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2 
decimal places. Display the following fields:<br><br>`);
document.write(`<h1>K Electric Bill </h1>`);
let customerName = "abc customer name";
document.write(`Customer Name :<b>${customerName}</b></br>`);
const allMonths = [
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
let currentMonth2 = allMonths[new Date().getMonth()];
document.write(`Current Month : <b>${currentMonth2}</b></br>`);
let numberOfUnits = 410;
document.write(`Number Of Units :<b>${numberOfUnits}</b></br>`);
let chargesPerUnits = 16;
document.write(`Charges Per Unit Name :<b>${chargesPerUnits}</b></br> `);
let netAmount = chargesPerUnits * numberOfUnits;
let latePaymentSurcharge = 350;
document.write(
  `Net Amount Payable (within due Date) :<b>${netAmount.toFixed()}</b></br>`
);
document.write(`Late Payment Surcharge :<b>${latePaymentSurcharge}</b></br>`);
let grossAmount = netAmount + latePaymentSurcharge;
document.write(`Gross Amount (After due Date) :<b>${grossAmount}</b></br>`);
document.write("<br> <hr>");

