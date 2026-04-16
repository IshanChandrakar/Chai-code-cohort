/**
 * Write your challenge solution here
 */

let mainHeading = document.querySelector("#mainHeading")

document.querySelector(".color-buttons").addEventListener('click', (event)=>{
    let buttonId = event.target.id
    switch(buttonId){
        case "redButton":
            mainHeading.style.color = "#e74c3c"
            break;
        case "greenButton":
            mainHeading.style.color = "#2ecc71"
            break;
        case "blueButton":
            mainHeading.style.color = "#3498db"
            break;
        case "purpleButton":
            mainHeading.style.color = "#9b59b6"
            break;
        case "resetButton":
            mainHeading.style.color = "#34495e"
            break;
    }
})
