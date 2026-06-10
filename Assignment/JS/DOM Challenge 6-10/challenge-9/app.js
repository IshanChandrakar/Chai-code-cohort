/**
 * Write your challenge solution here
 */
const panel = document.querySelector(".panel")
const toggleBtn = document.querySelector(".toggle-btn")
let isPanelActive = false
toggleBtn.addEventListener("click",()=>{
    isPanelActive = !isPanelActive
    if(isPanelActive){
        panel.classList.add("active")
        const closeBtn = document.querySelector(".close-btn")
        closeBtn.addEventListener("click",()=>{
            panel.classList.remove("active")
            isPanelActive = !isPanelActive
        })
        const menuItem = document.querySelectorAll(".menu-item")
        menuItem.forEach(item=>{
            item.addEventListener("click",()=>{
                alert("Yo")
            })
        })
    }
    else{
        panel.classList.remove("active")
    }
})