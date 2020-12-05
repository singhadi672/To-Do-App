let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click",(event)=>{

    event.preventDefault();
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    let todoListItem = document.createElement("li");
    todoListItem.classList.add("todo-item");
    todoListItem.innerText= "hey";
    let doneButton = document.createElement("button");
    doneButton.classList.add("todo-done");

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("todo-delete");

    doneButton.innerHTML = '<i class="fas fa-check"></i>'
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(todoListItem);
    todoDiv.appendChild(doneButton);
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
    



})