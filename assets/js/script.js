// Creates an object for the button element from the html.
var buttonEl = document.querySelector("#save-task");
// Creates an object for the tasks-to-do list element from the html.
var tasksToDoEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// Adds an event to the button. When clicked it calls on the createTaskHandler function which:
//  - Defines listItemEl & creates a new 'li'
//  - Gives listItemEl class name of 'task-item' for styling and text content of "This is a new task."
//  - Appends listItemEl to tasksToDoEl. Applies the list item to the task to do list.
buttonEl.addEventListener("click", createTaskHandler);
// this means that on click, call back to previous function createTaskHandler.