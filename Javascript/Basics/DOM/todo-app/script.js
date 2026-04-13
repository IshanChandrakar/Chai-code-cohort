let todo_items = document.querySelector("ul")

document.querySelector(".add").addEventListener("click", function(){
    let todo_task = document.querySelector(".todo-task").value
    if(todo_task){
        const deleteTask = document.createElement('button')
        deleteTask.innerHTML = "Delete"
        
        const li = document.createElement("li")
        li.innerText = todo_task
        li.appendChild(deleteTask)

        todo_items.appendChild(li)

        deleteTask.addEventListener("click", ()=>{
            li.remove()
        })

        document.querySelector(".todo-task").value = ""
    }
})

document.querySelector(".deleteAll").addEventListener("click",()=>{
    todo_items.innerHTML = ''
})