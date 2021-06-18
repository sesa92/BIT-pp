// ●	Print out the whole date object in the console.
// ●	Print out the current time in the console.
// ●	Print out the current date in the console.


var dateObject = new Date ();
var fullDate = Date();
var currentTime = dateObject.toLocaleTimeString();
var currentdate = dateObject.toLocaleDateString();

/* var currentTime = dateObject.getHours() + " : " + dateObject.getMinutes();
var currentdate = dateObject.getDay() + " - " + dateObject.getMonth() + " - " + dateObject.getFullYear();  */

console.log("Full date object: " , fullDate);
console.log("Current time with hours and minutes: " , currentTime);
console.log("Current date: " , currentdate);