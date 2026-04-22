const digitalClock = document.querySelector(".digital-clock")
const showDate = document.querySelector(".date")
const monthArray = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const secondHand = document.querySelector(".second")
const minuteHand = document.querySelector(".minute")
const hourHand = document.querySelector(".hour")

// Track previous degree values to detect backward jumps
let prevSecondDeg = 0;
let prevMinuteDeg = 0;
let prevHourDeg = 0;

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    if (hour > 12) hour = hour % 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDate()
    let monthIndex = date.getMonth()
    let month = monthArray[monthIndex]
    let year = date.getFullYear()

    let secondDeg = second * 6;
    let minuteDeg = minute * 6;
    let hourDeg = hour * 30;

    // If new degree is less than previous, it wrapped around — add 360 to keep going forward
    if (secondDeg < prevSecondDeg) secondDeg += 360;
    if (minuteDeg < prevMinuteDeg) minuteDeg += 360;
    if (hourDeg < prevHourDeg) hourDeg += 360;

    prevSecondDeg = secondDeg;
    prevMinuteDeg = minuteDeg;
    prevHourDeg = hourDeg;

    if (hour < 10) hour = `0${hour}`
    if (minute < 10) minute = `0${minute}`
    if (second < 10) second = `0${second}`

    digitalClock.textContent = `${hour}:${minute}:${second}`
    showDate.textContent = `${day} ${month} ${year}`
    secondHand.style.transform = `rotate(${prevSecondDeg}deg)`
    minuteHand.style.transform = `rotate(${prevMinuteDeg}deg)`
    hourHand.style.transform = `rotate(${prevHourDeg}deg)`
}, 1000);