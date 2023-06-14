// updateTime from: https://codepen.io/dervondenbergen/pen/dVPOwB 
var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')

var last = new Date()

function setInitialTime () {
    var nowHours = last.getHours().toString()
    var nowMinutes = last.getMinutes().toString()
    document.getElementById('choose-date').valueAsDate = new Date();

    var hours = nowHours.split('')
  
    if (hours.length === 1) {
      hours.unshift('0')
    }
    var hours_first = hoursContainer.firstElementChild
    hours_first.innerHTML = hours[0]; 
    var hours_second = hoursContainer.lastElementChild
    hours_second.innerHTML = hours[1]; 

    // Update minutesContainer 
    var minutes = nowMinutes.split('')
    if (minutes.length === 1) {
        minutes.unshift('0')
    }
    var minutes_first = minutesContainer.firstElementChild
    minutes_first.innerHTML = minutes[0]; 
    var minutes_second = minutesContainer.lastElementChild
    minutes_second.innerHTML = minutes[1]; 

}


function updateTime () {
  var now = new Date
  
  var lastHours = last.getHours().toString()
  var nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    var hours = nowHours.split('')
  
    if (hours.length === 1) {
      hours.unshift('0')
    }
    var hours_first = hoursContainer.firstElementChild
    hours_first.innerHTML = hours[0]; 
    var hours_second = hoursContainer.lastElementChild
    hours_second.innerHTML = hours[1]; 
  }
  
  var lastMinutes = last.getMinutes().toString()
  var nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    var minutes = nowMinutes.split('')
    if (minutes.length === 1) {
        minutes.unshift('0')
    }
    var minutes_first = minutesContainer.firstElementChild
    minutes_first.innerHTML = minutes[0]; 
    var minutes_second = minutesContainer.lastElementChild
    minutes_second.innerHTML = minutes[1];   }
  
  last = now
}
function setTimezone() {
    // https://stackoverflow.com/questions/9149556/how-to-get-utc-offset-in-javascript-analog-of-timezoneinfo-getutcoffset-in-c
    var d = new Date()
    const month = d.getMonth() + 1; 
    const day = d.getDate(); 
    const year = d.getFullYear(); 

    var utcHours = -d.getTimezoneOffset()/60;
    if (utcHours >= 0) {
        utcHours = utcHours.toString(); 
        utcHours = '+' + utcHours; 
    }
    var tz_offset = document.querySelector(".tz_offset")
    tz_offset.innerHTML = "UTC" + utcHours; 

    var date_select = document.querySelector(".date")
    date_select.innerHTML = `${month}/${day}/${year}`

    var tz_identifier = document.querySelector(".tz_identifier")
    tz_identifier.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone
}

function padZero(str) {
    str = str.toString()
    return str.padStart(2, '0')
}
function convertTime() {
    // Get time (default 0), timezone (default UTC-12)

    var date_to_convert = document.getElementById('choose-date').value
    var [year, month, day] = date_to_convert.split('-')
    if (month.length === 1) {
        month.unshift('0')
    }

    var hour_to_convert = document.getElementById("choose-time").value.toString()

    hour_to_convert = padZero(hour_to_convert)
    month = padZero(month)
    day = padZero(day) 


    var timezone_to_convert = document.getElementById("choose-timezone").value
    const localDate = new Date(`${year}-${month}-${day}T${hour_to_convert}:00:00.000${timezone_to_convert}:00`);
    var localHour = localDate.getHours(); 
    var localYear = localDate.getFullYear();
    var localDay = localDate.getDate(); 
    var localMonth = localDate.getMonth() + 1; 

    localHour = padZero(localHour)
    localDay = padZero(localDay)
    localMonth = padZero(localMonth)
    // Set converting from information 
    var convertFromHoursContainer = document.querySelector(" #convertFrom .clock .hours")
    var convertFromMinutesContainer = document.querySelector("#convertFrom .clock .minutes")
    var convertFromTimezone = document.querySelector("#convertFrom .timezone .tz_offset")
    var convertFromDate = document.querySelector("#convertFrom .timezone .date")

    console.log(hour_to_convert)
    convertFromHoursContainer.firstElementChild.innerHTML = hour_to_convert[0]
    convertFromHoursContainer.lastElementChild.innerHTML = hour_to_convert[1]
    convertFromTimezone.innerHTML = "UTC" + timezone_to_convert 
    convertFromDate.innerHTML = `${month}/${day}/${year}`

    // Set local time information 
    var convertToHoursContainer = document.querySelector(" #convertTo .clock .hours")
    var convertToMinutesContainer = document.querySelector("#convertTo .clock .minutes")
    var convertToTimezone = document.querySelector("#convertTo .timezone .tz_offset")
    var convertToDate = document.querySelector("#convertTo .timezone .date")
    var convertToTimezoneName = document.querySelector("#convertTo .timezone .tz_identifier")

    console.log(hour_to_convert)
    convertToHoursContainer.firstElementChild.innerHTML = localHour[0]
    convertToHoursContainer.lastElementChild.innerHTML = localHour[1]

    var utcHours = -localDate.getTimezoneOffset()/60 
    if (utcHours >= 0) {
        utcHours = utcHours.toString(); 
        utcHours = '+' + utcHours; 
    }
    convertToTimezone.innerHTML = "UTC" + utcHours
    convertToDate.innerHTML = `${localMonth}/${localDay}/${localYear}`
    convertToTimezoneName.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone

    document.querySelector(".showClock").style.display = 'none';
    document.querySelector(".convertTime").style.display = 'flex';
}
setInitialTime()
setTimezone()
setInterval(updateTime, 100)