const rating_value = document.querySelector("#rating-value")
const star_selector = document.querySelector("#star-container")
const submit = document.querySelector("button")
const reviews = document.querySelector(".reviews")
let form = document.querySelector("#form")
let myRating

star_selector.addEventListener('click', (event)=>{
    myRating = parseInt(event.target.id)
    document.querySelector("#rating-value").textContent = `Rating : ${myRating}/5`
})

submit.addEventListener("click",()=>{
    form = form.value
    if(form && myRating){
        const div = document.createElement("div")
        div.appendChild(form)

        const stars = document.createElement('div')
        for(let i=1; i<myRating.length; i++){
            stars+= "⭐"
        }
        div.appendChild(stars)

        reviews.appendChild(div)
        // console.log(div)
    }   
})