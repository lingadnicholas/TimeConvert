

function setTimezone() {
    // https://stackoverflow.com/questions/9149556/how-to-get-utc-offset-in-javascript-analog-of-timezoneinfo-getutcoffset-in-c
    var d = new Date()
    var utcHours = -d.getTimezoneOffset()/60;
    var tz_offset = document.querySelector(".tz_offset")
    tz_offset.innerHTML = "UTC" + utcHours; 


    var tz_identifier = document.querySelector(".tz_identifier")
    tz_identifier.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone
}

setTimezone()
