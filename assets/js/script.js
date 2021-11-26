// Creates an object for the form element from the html.
var formEl = document.querySelector("#task-form");
// Creates an object for the tasks-to-do list element from the html.
var tasksToDoEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function() {

    //Prevents browser from refreshing when a submission is made
    event.preventDefault();

    //Adds a querySelector to the Input of the html with the name 'task-name.'
    //Dynamic way of making every input for that form into a querySelector.
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // This selects and stores just the value of the input.
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list

    tasksToDoEl.appendChild(listItemEl);
}

// Adds an event to the form. When submit it calls on the createTaskHandler function which:
//  - Defines listItemEl & creates a new 'li'
//  - Gives listItemEl class name of 'task-item' for styling and text content of "This is a new task."
//  - Appends listItemEl to tasksToDoEl. Applies the list item to the task to do list.
formEl.addEventListener("submit", createTaskHandler);
// this means that on submit, call back to previous function createTaskHandler.