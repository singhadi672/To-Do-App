let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click",(event)=>{

    event.preventDefault();
    if(!todoInput.value){
        alert("enter something!!!");
    }
    else{
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    let todoListItem = document.createElement("li");
    todoListItem.classList.add("todo-item");
    todoListItem.innerText= todoInput.value;
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
    todoInput.value="";
    }
})

todoList.addEventListener("click",(e)=>{
    if(e.target.classList[0]==="todo-delete"){
        e.target.parentElement.classList.add("fall");
        e.target.parentElement.addEventListener("transitionend",()=>{
            e.target.parentElement.remove();
        })
        
    }

    if(e.target.classList[0]==="todo-done"){
        e.target.parentElement.classList.toggle("completed");
    }
})