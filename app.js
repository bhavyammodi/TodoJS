// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo); // addTodo is a func
todoList.addEventListener("click", deleteButton);

// Functions

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
    todoList.appendChild(todoDiv);
  }
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
  }
}
