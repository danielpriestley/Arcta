const today = new Date();


const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const curWeekday = weekday[today.getDay()];



document.getElementById('date').innerHTML = `${curWeekday}, ${today.toLocaleDateString("en-GB")}`;