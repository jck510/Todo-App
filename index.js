const task_input = document.querySelector("#task__input");
const priority_input = document.querySelector("#priority__input");
const task_list = document.querySelector("#list__todo-items");

const task_container = document.querySelector(".container_");

const filters = document.querySelector(".filterables");

//buttons
const submitBtn = document.querySelector("#submit__task");
const highLow = document.querySelector("#sort__high");
const lowHigh = document.querySelector("#sort__low");
//const trash = document.querySelector(".trashbin");


//Array to store the todos for sorting, searching, etc. of todo items
//next level of project would be refactoring to persist in local storage or a DB
const items = [];

//Creates a todo item in the DOM
const createTodoItem = (task, priority, id) => {
    const listItemWrapper = document.createElement("LI");
    const todoItem = document.createElement("DIV");
    todoItem.classList.add("list__content__box");

    listItemWrapper.setAttribute("data-priority",priority);
    listItemWrapper.setAttribute("data-id_", id);
    listItemWrapper.classList.add("list__item");

    const taskName = document.createElement("P");
    taskName.classList.add("task__text");
    taskName.innerText = task;

    const delBtn = document.createElement("Button");
    delBtn.classList.add("delete__task-btn");
    delBtn.innerText = "X";

    const priorityIcon = document.createElement("P");
    priorityIcon.classList.add("priority__icon");
    priorityIcon.innerText = priority;

    todoItem.appendChild(taskName);
    todoItem.appendChild(delBtn);
    listItemWrapper.appendChild(priorityIcon);
    listItemWrapper.appendChild(todoItem);

    task_list.appendChild(listItemWrapper);

    delBtn.addEventListener('click', () =>{
        const taskNode = Array.from(task_list.children).find(node => {
            const nodeText = node.innerText.slice(3, node.innerText.length - 3);
            return nodeText === taskName.innerText;
        });
        task_list.removeChild(taskNode);
    });
};


submitBtn.addEventListener('click', (e) => {
    if(task_input.value === ''){
        alert("Must enter a task to continue");
        return;
    }

    //Create a task
    const task_ = {
        task: task_input.value,
        priority: priority_input.value,
        id_: Math.floor(Math.random()*13) * items.length * 3 + 1, //good for small project like this, but bad for full scale project
        
    };

    //add to the array
    items.push(task_);

    //create item
    createTodoItem(task_.task, task_.priority, task_.id_);
    
    //clear last entered todo
    task_input.value = "";
    priority_input.value = 0;
});