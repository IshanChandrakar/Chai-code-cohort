/**
 * Write your challenge solution here
 */
const accordionButton = document.querySelectorAll(".accordion-button")
accordionButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.parentElement.classList.contains("active")){
            button.parentElement.classList.remove("active")
        }
        else{
            button.parentElement.classList.add("active")
        }
    })
})
