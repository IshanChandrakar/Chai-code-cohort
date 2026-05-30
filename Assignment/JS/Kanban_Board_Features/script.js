let taskId = 1;

const addTaskBtn = document.querySelector("#addTaskBtn");
const todo = document.querySelector("#todo");
const popupWindow = document.querySelector("#popupWindow");
const overlay = document.querySelector("#overlay");

addTaskBtn.addEventListener("click", () => {
    let userTask = prompt("Enter a new task");

    if (userTask) {
        let newTask = document.createElement("div");

        newTask.classList.add("addedTask");
        newTask.setAttribute("id", taskId);
        newTask.setAttribute("draggable", true);

        newTask.innerHTML = `
            ${userTask}
            <button class="editTask">Edit</button>
            <button class="deleteTask">Delete</button>
        `;

        todo.appendChild(newTask);

        // deleting the task
        newTask
            .querySelector(".deleteTask")
            .addEventListener("click", (event) => {
                let taskParentId = event.target.parentNode.parentNode.id;

                document.getElementById(taskParentId).removeChild(newTask);
            });

        // editing the task
        newTask.querySelector(".editTask").addEventListener("click", (event) => {
                // show overlay
                overlay.classList.remove("hideOverlay");
                overlay.classList.add("showOverlay");

                // show popup
                popupWindow.classList.remove("hidePopup");
                popupWindow.classList.add("showPopup");

                let editTaskId = event.target.parentNode.id;

                popupWindow.querySelector("#changeTask").value = document
                    .getElementById(editTaskId)
                    .childNodes[0].nodeValue.trim();

                // ok button
                popupWindow.querySelector("#okBtn").addEventListener(
                    "click",
                    () => {
                        let changedTask =
                            popupWindow.querySelector("#changeTask").value;

                        if (changedTask) {
                            document.getElementById(
                                editTaskId,
                            ).childNodes[0].nodeValue = changedTask;

                            popupWindow.classList.add("hidePopup");
                            popupWindow.classList.remove("showPopup");

                            overlay.classList.add("hideOverlay");
                            overlay.classList.remove("showOverlay");
                        }
                    },
                    { once: true },
                );

                // cancel button
                popupWindow.querySelector("#cancelBtn").addEventListener(
                    "click",
                    () => {
                        popupWindow.classList.add("hidePopup");
                        popupWindow.classList.remove("showPopup");

                        overlay.classList.add("hideOverlay");
                        overlay.classList.remove("showOverlay");
                    },
                    { once: true },
                );
            });

        // drag start
        newTask.addEventListener("dragstart", () => {
            newTask.classList.add("beingDragged");
        });

        // drag end
        newTask.addEventListener("dragend", () => {
            newTask.classList.remove("beingDragged");
        });

        taskId++;
    }
});

const cardContainer = document.querySelectorAll(".cards");

cardContainer.forEach((card) => {
    card.addEventListener("dragover", () => {
        let draggedItem = document.querySelector(".beingDragged");

        card.appendChild(draggedItem);
    });
});
