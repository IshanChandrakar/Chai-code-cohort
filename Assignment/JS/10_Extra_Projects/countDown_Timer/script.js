const submit = document.getElementById("submit")
let timer = document.getElementById("timer")

submit.addEventListener("click",()=>{
    let countdownInput = Number(document.querySelector("#countdownInput").value)
    
    const intervalID = setInterval(()=>{
        timer.textContent = countdownInput
        if(countdownInput<=0)
            clearInterval(intervalID)
        countdownInput--
    },1000)
})