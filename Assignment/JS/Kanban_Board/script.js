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
        newTask.classList.add('item');
        newTask.id = taskNum;
        newTask.setAttribute('draggable', true)
        newTask.innerHTML = `${taskName} <button id=${taskNum} class="deleteBtn">Delete</button>`;
        todoContainer.appendChild(newTask);

        newTask.querySelector(".deleteBtn").addEventListener("click", (event) => {
            todoContainer.removeChild(newTask)
        });

        newTask.addEventListener('dragstart', () => {
            newTask.classList.add('flying');
        });
        newTask.addEventListener('dragend', () => {
            newTask.classList.remove('flying');
        });


        taskNum++;
    }
});

const allBoards = document.querySelectorAll(".board")
allBoards.forEach((board)=>{
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector(".flying")
        board.appendChild(flyingElement)
    })
})