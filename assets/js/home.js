// This Script has been added so that I can calculate Today's date (the day this app is used)
// And disable all the previous dates so that user cannot input a date which is in the past
// console.log("script Loaded");
var date = new Date();
// console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());

if (date.getDate() < 10 && date.getMonth() + 1 < 10) {
    var today = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate();
} else if ((date.getMonth() + 1) < 10) {
    var today = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
} else if ((date.getMonth() + 1) > 10) {
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + date.getDate();
} else {
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

// console.log(document.getElementById("datepicker").min);
document.getElementById("datepicker").setAttribute('min', today);
// console.log(document.getElementById("datepicker").min);