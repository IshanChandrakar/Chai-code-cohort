let currentMood = null
const emojiContainer = document.querySelector(".emojiContainer")
let moods = emojiContainer.childNodes
moods.forEach(mood => {
    mood.addEventListener("click", () => {
        currentMood = mood.id
    })
})

const submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", () => {
    let dateSelected = document.querySelector("#dateInput").value
    if (currentMood && dateSelected) {
        console.log(dateSelected, currentMood)
        localStorage.setItem(dateSelected, currentMood)

        document.querySelector("#dateInput").value = null
    }
})

let today = new Date()
let day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
let month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
let year = today.getFullYear()
let daysInMonth = new Date(year, month, 0).getDate()

let calender = document.querySelector("#calender")

for (let i = 1; i <= daysInMonth; i++) {
    let newDate = document.createElement("div")
    newDate.textContent = `${i}-${month}-${year}`
    newDate.setAttribute("id", `${i}-${month}-${year}`)
    calender.appendChild(newDate)
}

const previousMonth = document.querySelector("#previousMonth")
previousMonth.addEventListener("click", () => {
    calender.replaceChildren()
    if(month>1)
        month = month - 1
    else if(month==1){
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
nextMonth.addEventListener("click",()=>{
    calender.replaceChildren()
    if(month<12)
        month++
    else if(month==12){
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