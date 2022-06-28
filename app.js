// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filter = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo); // addTodo is a func
todoList.addEventListener("click", deleteButton);
filter.addEventListener("click", filterTodo);

// Extra variables
let filteropt = "all";

// Functions
function filterchecker() {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    // Removing if it is under other tab
    if (filteropt == "all") {
      todo.style.display = "flex";
    } else if (filteropt == "completed") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    } else if (filteropt == "uncompleted") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "none";
      } else {
        todo.style.display = "flex";
      }
    }
  });
}
function addTodo(e) {
  // for preventing natural behaviour
  e.preventDefault();
  let text = todoInput.value;
  text = text.trim();
  if (text != "") {
    // making sure of blank text
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // adding the class

    // creating LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item"); //new class
    todoDiv.appendChild(newTodo); // attaching

    // right mark
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // Append at last
    todoList.insertBefore(todoDiv, todoList.firstElementChild);
    // using insertBefore to insert the inverted list, using appendChild makes it normal
  }
  filterchecker();
  // clear the input
  todoInput.value = "";
}

function deleteButton(e) {
  // alert(e.target);
  const item = e.target; // identifying every clicks in todoList
  // item.classList is an array with only clicked event class name
  // DELETE Tasks
  if (item.classList[0] === "delete-btn") {
    // seperately dealing with delete only
    // item.remove(); // this is removing only the button
    // alert(item.classList);
    const tobedeleted = item.parentElement;
    // animating
    tobedeleted.classList.add("fall");
    tobedeleted.addEventListener("transitionend", function (e) {
      tobedeleted.remove();
    });
  }
  // DONE Tasks
  if (item.classList[0] === "complete-btn") {
    const tobedone = item.parentElement;
    tobedone.classList.toggle("completed"); // toggling the class
    filterchecker();
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        filteropt = "all";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        filteropt = "completed";
        break;
      case "uncompleted":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        filteropt = "uncompleted";
        break;
    }
  });
}

function saveLocal(todo)
{
  
}
