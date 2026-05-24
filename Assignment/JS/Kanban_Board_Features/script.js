let taskId = 1
const addTaskBtn = document.querySelector("#addTaskBtn")
const todo = document.querySelector("#todo")
const popupWindow = document.querySelector("#popupWindow")
addTaskBtn.addEventListener("click",()=>{
    let userTask = prompt("Enter a new task")
    if(userTask){
        let newTask = document.createElement("div")
        newTask.classList.add("addedTask")
        newTask.setAttribute("id", taskId)
        newTask.innerHTML = `${userTask} <button class="editTask">Edit</button> <button class="deleteTask">Delete</button>`

        todo.appendChild(newTask)

        newTask.querySelector(".deleteTask").addEventListener("click",()=>{
            todo.removeChild(newTask)
        })
        newTask.querySelector(".editTask").addEventListener("click",()=>{
            popupWindow.classList.remove("hidePopup")
            popupWindow.classList.add("showPopup")
            popupWindow.querySelector("#changeTask").value = userTask
        })
        popupWindow.querySelector("#okBtn").addEventListener("click",()=>{
            
        })
        taskId++
    }
})