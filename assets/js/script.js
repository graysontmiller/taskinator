// Creates an object for the form element from the html.
var formEl = document.querySelector("#task-form");
// Creates an object for the tasks-to-do list element from the html.
var tasksToDoEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function() {

    //Prevents browser from refreshing when a submission is made
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// Adds an event to the form. When submit it calls on the createTaskHandler function which:
//  - Defines listItemEl & creates a new 'li'
//  - Gives listItemEl class name of 'task-item' for styling and text content of "This is a new task."
//  - Appends listItemEl to tasksToDoEl. Applies the list item to the task to do list.
formEl.addEventListener("submit", createTaskHandler);
// this means that on submit, call back to previous function createTaskHandler.