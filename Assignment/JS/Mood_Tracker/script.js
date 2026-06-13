let currentMood = null
const emojiContainer = document.querySelector(".emojiContainer")
let moods = emojiContainer.childNodes
moods.forEach(mood => {
    mood.addEventListener("click", () => {
        currentMood = mood.id
    })
})

const submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click",()=>{
    let dateSelected = document.querySelector("#dateInput").value
    if(currentMood && dateSelected){
        console.log(dateSelected, currentMood)
        localStorage.setItem(dateSelected,currentMood)

        document.querySelector("#dateInput").value = null
    }
})