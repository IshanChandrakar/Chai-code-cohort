const moodEmojis = ["😀", "😞", "🤩", "😐", "😱"]
const moodName = ["happyMood", "sadMood", "excitedMood", "neutralMood", "fearfulMood"]

let moodSelectedIndex = null
let currentMood = null
let allMoodData = null
const emojiContainer = document.querySelector(".emojiContainer")
let moods = emojiContainer.childNodes
moods.forEach(mood => {
    mood.addEventListener("click", () => {
        currentMood = mood.id
        moodSelectedIndex = moodName.indexOf(currentMood)
    })
})

const submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", () => {
    let dateSelected = document.querySelector("#dateInput").value
    if (currentMood && dateSelected) {
        let mooddate = document.querySelector("#dateInput").valueAsDate.getDate()
        let moodMonth = document.querySelector("#dateInput").valueAsDate.getMonth() + 1
        let moodYear = document.querySelector("#dateInput").valueAsDate.getFullYear()

        console.log('mood added')
        const [year, month, day] = dateSelected.split("-")
        const newDateSelected = `${Number(day)}-${Number(month)}-${Number(year)}`
        localStorage.setItem(newDateSelected, currentMood)

        let moodDateId = `${mooddate}-${moodMonth}-${moodYear}`

        allMoodData = { ...localStorage }
        for (const key in allMoodData) {
            if (key == calenderDateId) {
                newDate.textContent = `${key} ${moodEmojis[moodName.indexOf(allMoodData[key])]}`
                console.log(moodEmojis[moodName.indexOf(allMoodData[key])])
                newDate.setAttribute("id", `${key}`)
                // calender.appendChild(newDate)
            }
        }

        showCalender()
        document.querySelector("#dateInput").value = null
    }
    else {
        alert("Select both date and mood emoji")
    }
})
for (const key in allMoodData) {
    if (key == calenderDateId) {
        newDate.textContent = `${key} ${moodEmojis[moodName.indexOf(allMoodData[key])]}`
        console.log(moodEmojis[moodName.indexOf(allMoodData[key])])
        newDate.setAttribute("id", `${key}`)
        // calender.appendChild(newDate)
    }
}
function showCalender() {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let daysInMonth = new Date(year, month, 0).getDate()

    let calender = document.querySelector("#calender")

    for (let i = 1; i <= daysInMonth; i++) {
        let newDate = document.createElement("div")
        let calenderDateId = `${i}-${month}-${year}`
        newDate.textContent = `${calenderDateId}`
        newDate.setAttribute("id", `${calenderDateId}`)
        calender.appendChild(newDate)
    }

    const previousMonth = document.querySelector("#previousMonth")
    previousMonth.addEventListener("click", () => {
        calender.replaceChildren()
        if (month > 1)
            month = month - 1
        else if (month == 1) {
            month = 12
            year--
        }
        let daysInMonth = new Date(year, month, 0).getDate()
        for (let i = 1; i <= daysInMonth; i++) {
            let newDate = document.createElement("div")
            newDate.textContent = `${i}-${month}-${year}`
            newDate.setAttribute("id", `${i}-${month}-${year}`)
            calender.appendChild(newDate)
        }
    })

    const nextMonth = document.querySelector("#nextMonth")
    nextMonth.addEventListener("click", () => {
        calender.replaceChildren()
        if (month < 12)
            month++
        else if (month == 12) {
            month = 1
            year++
        }
        let daysInMonth = new Date(year, month, 0).getDate()
        for (let i = 1; i <= daysInMonth; i++) {
            let newDate = document.createElement("div")
            newDate.textContent = `${i}-${month}-${year}`
            newDate.setAttribute("id", `${i}-${month}-${year}`)
            calender.appendChild(newDate)
        }
    })
}
showCalender()