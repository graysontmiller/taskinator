// Creates a task ID for tasks.
var taskIdCounter = 0;
// Creates an object for the form element from the html.
var formEl = document.querySelector("#task-form");
// Creates an object for the tasks-to-do list element from the html.
var tasksToDoEl = document.querySelector('#tasks-to-do');

var pageContentEl = document.querySelector("#page-content");

var taskFormHandler = function() {

    //Prevents browser from refreshing when a submission is made
    event.preventDefault();

    //Adds a querySelector to the Input of the html with the name 'task-name.'
    //Dynamic way of making every input for that form into a querySelector.
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // This selects and stores just the value of the input.
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    // package the data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);

    formEl.reset();
}

// Create HTML based on the data for the task object (like name and type)
var createTaskEl = function(taskDataObj) {
    // Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // Add task ID as custom attribute 
    listItemEl.setAttribute("data-task-id", taskIdCounter)

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

    //increase task counter for next unique id 
    taskIdCounter++;
}

//Function to create actionable buttons for each task
var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    //Create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    // Select/Dropdown
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    // Options for the select

    var statusChoices = ["To Do", "In Progress", "Completed"];
    
    for (var i = 0; i<statusChoices.length; i++) {
        //create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        //append to select
        statusSelectEl.appendChild(statusOptionEl);
    }

    return actionContainerEl;
}

var taskButtonHandler = function(event) {
    // get target element from and event
    var targetEl = event.target

    //edit button was clicked
    if (targetEl.matches(".edit-btn")) {
        var taskId = targetEl.getAttribute("data-task-id");
        editTask(taskId);
    }
    // delete button was clicked
    else if (targetEl.matches(".delete-btn")) {
        var taskId = targetEl.getAttribute("data-task-id");
        deleteTask(taskId);
    }
};

var editTask = function(taskId) {
    //get task list item element
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    // get content from task name and type
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    document.querySelector("input[name='task-name']").value = taskName;

    var taskType = taskSelected.querySelector("span.task-type").textContent;
    document.querySelector("select[name='task-type']").value = taskType;

    document.querySelector("#save-task").textContent = "Save Task";
    formEl.setAttribute("data-task-id", taskId);
};

var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
};

// Adds an event to the form. When submit it calls on the taskFormHandler function which:
//  - Defines listItemEl & creates a new 'li'
//  - Gives listItemEl class name of 'task-item' for styling and text content of "This is a new task."
//  - Appends listItemEl to tasksToDoEl. Applies the list item to the task to do list.
formEl.addEventListener("submit", taskFormHandler);
// this means that on submit, call back to previous function taskFormHandler.

pageContentEl.addEventListener("click", taskButtonHandler);