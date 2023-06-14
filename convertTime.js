function convertUTCDateToLocalDate(date, timezoneOffset) {
    var newDate = new Date;

    var hours = date.getHours();

    newDate.setHours(hours - timezoneOffset);

    newDate.setMinutes(date.getMinutes()); // We expect to only do offsets by the hour.
    newDate.setSeconds(date.getSeconds());
    return newDate;   
}

// Set up a date object
const utcDate = new Date(Date.UTC(2023, 7, 13, 18, 0)); // June 13 2023 at 18:00
const timezoneOffset = +8; 

// June 13 2023 18:00 in UTC+8 time is June 13 2023 03:00 in LA time
console.log(convertUTCDateToLocalDate(utcDate, timezoneOffset));