let taskId = 1;
const addTaskBtn = document.querySelector("#addTaskBtn");
const todo = document.querySelector("#todo");
const popupWindow = document.querySelector("#popupWindow");
addTaskBtn.addEventListener("click", () => {
    let userTask = prompt("Enter a new task");
    if (userTask) {
        let newTask = document.createElement("div");
        newTask.classList.add("addedTask");
        newTask.setAttribute("id", taskId);
        newTask.setAttribute("draggable", true)
        newTask.innerHTML = `${userTask} <button class="editTask">Edit</button> <button class="deleteTask">Delete</button>`;

        todo.appendChild(newTask);

        // deleting the task
        newTask.querySelector(".deleteTask").addEventListener("click", (event) => {
            let taskParentId = event.target.parentNode.parentNode.id
            document.getElementById(taskParentId).removeChild(newTask)
        });

        // editing the task
        newTask.querySelector(".editTask").addEventListener("click", (event) => {
            popupWindow.classList.remove("hidePopup");
            popupWindow.classList.add("showPopup");
            let editTaskId = event.target.parentNode.id            
            popupWindow.querySelector("#changeTask").value = document.getElementById(editTaskId).childNodes[0].nodeValue.trim();
            // console.log(editTaskId);
            
            popupWindow.querySelector("#okBtn").addEventListener("click", () => {
                let changedTask = popupWindow.querySelector("#changeTask").value
                if(changedTask){
                    document.getElementById(editTaskId).childNodes[0].nodeValue = changedTask
                    popupWindow.classList.add("hidePopup");
                    popupWindow.classList.remove("showPopup");
                }
            }, { once: true });

            popupWindow.querySelector("#cancelBtn").addEventListener("click",()=>{
                popupWindow.classList.add("hidePopup");
                popupWindow.classList.remove("showPopup");
            }, {once: true})
        });

        newTask.addEventListener("dragstart", ()=>{
            newTask.classList.add("beingDragged")
        })
        newTask.addEventListener("dragend",(event)=>{
            newTask.classList.remove("beingDragged")
        })
        taskId++;
    }
});

const cardContainer = document.querySelectorAll(".cards")
cardContainer.forEach((card)=>{
    card.addEventListener("dragover",()=>{        
        let draggedItem = document.querySelector(".beingDragged")
        card.appendChild(draggedItem)
    })
})