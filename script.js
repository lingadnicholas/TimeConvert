// updateTime from: https://codepen.io/dervondenbergen/pen/dVPOwB 
var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')

var last = new Date()

function setInitialTime () {
    var nowHours = last.getHours().toString()
    var nowMinutes = last.getMinutes().toString()
   
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
    console.log(minutes)
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
    console.log(minutes)
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
    var utcHours = -d.getTimezoneOffset()/60;
    var tz_offset = document.querySelector(".tz_offset")
    tz_offset.innerHTML = "UTC" + utcHours; 


    var tz_identifier = document.querySelector(".tz_identifier")
    tz_identifier.innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone
}

setInitialTime()
setTimezone()
setInterval(updateTime, 100)