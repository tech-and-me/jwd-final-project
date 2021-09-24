//innitialize the new task manager
const taskManager = new TaskManager();

//select all fields of the add task form
let taskName = document.querySelector("#taskName");
let description = document.querySelector("#description");
let assignedTo = document.querySelector("#assignTo");
let dueDate = document.querySelector("#dueDate");
let select = document.querySelector("#status");
let save = document.querySelector("#save");
let closeX = document.querySelector(".btn-close");

// Create function to clear the task form when Save or X is clicked
function clearTaskForm(){
    taskName.value = "";
        description.value = "";
        assignedTo.value ="";
        dueDate.value="";
        select.value="";
        taskName.classList.remove("is-valid");
        description.classList.remove("is-valid");
        assignedTo.classList.remove("is-valid");
        select.classList.remove("is-valid");
        dueDate.classList.remove("is-valid");
        taskName.classList.remove("is-invalid");
        description.classList.remove("is-invalid");
        assignedTo.classList.remove("is-invalid");
        select.classList.remove("is-invalid");
        dueDate.classList.remove("is-invalid");
}





//create function to valid all input of the add Task form
function validFormFieldInput(event){
    //creating a variable to count the valid field
    let numValidFields = 0;
    //accessing value of the selected option of Status selection
    var valueStatus = select.options[select.selectedIndex].value;

    //stopping the form from submitting when submit button is clicked
    event.preventDefault();
    // event.stopPropagation();

    //validate Task Name field
    if(taskName.value.trim().length<5){
        taskName.classList.remove('is-valid');
        taskName.classList.add('is-invalid');}
    else{
        taskName.classList.add('is-valid');
        taskName.classList.remove('is-invalid');
        numValidFields++;
    }

    // validate description field
    if(description.value.trim().length<10 || description.value.trim().length>50 ){
        description.classList.remove('is-valid');
        description.classList.add('is-invalid');}
    else{
        description.classList.add('is-valid');
        description.classList.remove('is-invalid');
        numValidFields++;
    }

    // validate assigned to field
    if(assignedTo.value.trim().length<2){
        assignedTo.classList.remove('is-valid');
        assignedTo.classList.add('is-invalid');}
    else{
        assignedTo.classList.add('is-valid');
        assignedTo.classList.remove('is-invalid');
        numValidFields++;
    }
    // validate Due Date field
    if(dueDate.value===""){
        dueDate.classList.remove('is-valid');
        dueDate.classList.add('is-invalid');}
    else{
        dueDate.classList.add('is-valid');
        dueDate.classList.remove('is-invalid');
        numValidFields++;
    }

    // validate status field
    if(valueStatus===""){
        select.classList.remove('is-valid');
        select.classList.add('is-invalid');}
    else{
        select.classList.add('is-valid');
        select.classList.remove('is-invalid');
        numValidFields++;
    }
    console.log(numValidFields);
    // check if all fields are valid before collecting data
    if (numValidFields===5){
        taskManager.addTask(
            taskName.value,
            description.value,
            assignedTo.value,
            dueDate.value,
            valueStatus
        );

        //printing task manager for testing purposes only
        console.log(taskManager.tasks);

        //Clear all fields after saving those data
        clearTaskForm();  
        taskManager.render();
        taskManager.setColor(); 
    }
    else{
        numValidFields=0;
        return;
    } 

} // end of validFormFieldInput function

// add event to save button to validate and collect data from the add task form
save.addEventListener("click",validFormFieldInput);

// add event to clear all field once the closeX button is clicked.
closeX.addEventListener("click",clearTaskForm);

//Disable past date
let dateTime = new Date();
let day = dateTime.getDate();
let month = dateTime.getMonth() + 1;
let year = dateTime.getUTCFullYear();

if (day <10){
    day = "0" + day;
}
if (month <10){
    month = "0" + month;
}
minDate = year + "-" + month + "-" + day;
console.log(minDate);
document.querySelector("#dueDate").setAttribute('min',minDate);



// testing addTask method on the new taskManager
//taskManager.addTask("Car Services","Bring car to Granville Garage for Servicing","Kash","24/09/21","To Do");
// console.log(taskManager.tasks);
// console.log(taskManager.tasks[0].name);
// console.log(taskManager.tasks[0].description);
// console.log(taskManager.tasks[0].assignedTo);
// console.log(taskManager.tasks[0].status);
// console.log(taskManager.tasks[0].dueDate);

// task 7, step1.4
//let taskHtml = createTaskHtml("Hello","Hello56667778","kashie","03/10/2021","In Progress");
//console.log(taskHtml);