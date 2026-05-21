// const taskName = document.querySelector("#taskName");
const addButton = document.querySelector("#addButton");
const todoContainer = document.querySelector("#todoContainer");
const inProgress = document.querySelector("#inProgress");
const completed = document.querySelector("#completed");

let taskNum = 1;
addButton.addEventListener("click", () => {
    let taskName = prompt("Enter the task name")
    if (taskName) {
        let newTask = document.createElement("div");
        newTask.className = "newTask";
        newTask.id = taskNum;
        newTask.innerHTML = `${taskName} <button id=${taskNum} class="deleteBtn">Delete</button>`;
        todoContainer.appendChild(newTask);

        newTask.querySelector(".deleteBtn").addEventListener("click", (event) => {
            console.log(event.target.id);
        });

        taskNum++;
        document.querySelector("#taskName").value = "";
    }
});
