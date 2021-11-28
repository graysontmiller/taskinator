// Creates an object for the form element from the html.
var formEl = document.querySelector("#task-form");
// Creates an object for the tasks-to-do list element from the html.
var tasksToDoEl = document.querySelector('#tasks-to-do');

var taskFormHandler = function() {

    //Prevents browser from refreshing when a submission is made
    event.preventDefault();

    //Adds a querySelector to the Input of the html with the name 'task-name.'
    //Dynamic way of making every input for that form into a querySelector.
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // This selects and stores just the value of the input.
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package the data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

// Create HTML based on the data for the task object (like name and type)
var createTaskEl = function(taskDataObj) {
    // Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list

    tasksToDoEl.appendChild(listItemEl);
}

// Adds an event to the form. When submit it calls on the taskFormHandler function which:
//  - Defines listItemEl & creates a new 'li'
//  - Gives listItemEl class name of 'task-item' for styling and text content of "This is a new task."
//  - Appends listItemEl to tasksToDoEl. Applies the list item to the task to do list.
formEl.addEventListener("submit", taskFormHandler);
// this means that on submit, call back to previous function taskFormHandler.