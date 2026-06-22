const timeContainer = document.getElementById("timeContainer")
const dateContainer = document.getElementById("dateContainer")

function updateClock() {
    const newTime = new Date()
    let hours = newTime.getHours()
    let ampm = "AM"
    if (hours >= 12)
        ampm = "PM"
    hours = hours % 12 || 12
    hours = hours < 10 ? `0${hours}` : hours
    let minutes = newTime.getMinutes()
    minutes = minutes < 10 ? `0${minutes}` : minutes
    let seconds = newTime.getSeconds()
    seconds = seconds < 10 ? `0${seconds}` : seconds
    timeContainer.textContent = `${hours}:${minutes}:${seconds} ${ampm}`

    let date = newTime.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    dateContainer.textContent = date

}

setInterval(updateClock, 1000)

updateClock()