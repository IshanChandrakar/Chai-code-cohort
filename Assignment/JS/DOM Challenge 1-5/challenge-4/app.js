/**
 * Write your challenge solution here
 */
const addButton = document.querySelector("#addButton");
let totalTask = 0;
let completedTask = 0;
function addTaskFunction() {
    let taskInput = document.querySelector("#taskInput");
    if (taskInput) {
        totalTask++;
        document.querySelector("#totalTasks").textContent =
            `Total tasks : ${totalTask}`;
        // adding task name
        let taskName = document.createElement("span");
        taskName.textContent = taskInput.value;
        taskName.classList.add("task-text");

        // adding checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("complete-checkbox");

        // adding delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-button");

        // adding checkbox, task name, delete button in newTask
        let newTask = document.createElement("li");
        newTask.append(checkbox, taskName, deleteBtn);
        newTask.classList.add("individual-task");
        // adding newtask li inside the ul of DOM
        let taskList = document.querySelector("#taskList");
        taskList.append(newTask);

        document.querySelector("#taskInput").value = "";

        // checkbox logic
        let taskStatus = false;
        checkbox.addEventListener("change", () => {
            if (taskStatus) {
                taskName.classList.remove("task-item-completed");
                taskStatus = false;
                completedTask--;
                document.querySelector("#completedTasks").textContent =
                    `Completed : ${completedTask}`;
            } else {
                taskName.classList.add("task-item-completed");
                taskStatus = true;
                completedTask++;
                document.querySelector("#completedTasks").textContent =
                    `Completed : ${completedTask}`;
            }
        });

        // delete button logic
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(newTask);
            totalTask--;
            document.querySelector("#totalTasks").textContent =
                `Total tasks : ${totalTask}`;
            if (taskStatus) {
                completedTask--;
                document.querySelector("#completedTasks").textContent =
                    `Completed : ${completedTask}`;
            }
            let empty_list = document.querySelector(".empty-list");

            if (totalTask == 0) empty_list.style.display = "block";
        });

        let empty_list = document.querySelector(".empty-list");
        if (totalTask == 1) {
            empty_list.style.display = "none";
        }
    }
}

addButton.addEventListener("click", () => {
    addTaskFunction();
});
document.querySelector("#taskInput").addEventListener("keydown", (event) => {
    if (event.key == "Enter") addTaskFunction();
});
