/**
 * Write your challenge solution here
 */
let body = document.querySelector("#body")
let bulb = document.querySelector("#bulb")
let toggleButton = document.querySelector("#toggleButton")
let bulbStatus = false

document.querySelector("#toggleButton").addEventListener('click', ()=>{
    if(bulbStatus){
        bulb.classList.add('off')
        body.classList.add("dark-mode")
        toggleButton.textContent = "Turn On"
        document.querySelector("#status").textContent = "Status: Off"
        bulbStatus = false
    }
    else{
        bulb.classList.remove('off')
        body.classList.remove('dark-mode')
        toggleButton.textContent = "Turn Off"
        document.querySelector("#status").textContent = "Status: On"
        bulbStatus = true
    }
})