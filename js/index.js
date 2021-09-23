//innitialize the new task manager
const taskManager = new TaskManager();



//create function to valid all input of the add Task form
function validFormFieldInput(event){
    //creating a variable to count the valid field
    let numValidFields = 0;
    //select all fields of the add task form
    let taskName = document.querySelector("#taskName");
    let description = document.querySelector("#description");
    let assignTo = document.querySelector("#assignTo");
    let dueDate = document.querySelector("#dueDate");
    let select = document.querySelector("#status");
    let save = document.querySelector("#save");
    //accessing value of the selected option of Status selection
    var valueStatus = select.options[select.selectedIndex].value;

    //testing printing out value of dueDate field and status field
    //console.log(`here is the due date: ${dueDate.value}` );
    //console.log(`here is the value status: ${valueStatus}` );

    //stopping the form from submitting when submit button is clicked
    event.preventDefault();
    // event.stopPropagation();

    
    //checking the value of the status field
    //console.log(`here is the value status: ${valueStatus}` );

    //validate Task Name field
    if(taskName.value.trim().length<=5){
        taskName.classList.remove('is-valid');
        taskName.classList.add('is-invalid');}
    else{
        taskName.classList.add('is-valid');
        taskName.classList.remove('is-invalid');
        numValidFields++;
    }

    // validate description field
    if(description.value.trim().length<=5){
        description.classList.remove('is-valid');
        description.classList.add('is-invalid');}
    else{
        description.classList.add('is-valid');
        description.classList.remove('is-invalid');
        numValidFields++;
    }

    // validate assigned to field
    if(assignTo.value.trim().length<=3){
        assignTo.classList.remove('is-valid');
        assignTo.classList.add('is-invalid');}
    else{
        assignTo.classList.add('is-valid');
        assignTo.classList.remove('is-invalid');
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
            assignTo.value,
            dueDate.value,
            valueStatus
        );

        //printing task manager for testing purposes only
        console.log(taskManager.tasks);

        //Clear all fields after saving those data
        taskName.value = "";
        description.value = "";
        assignTo.value ="";
        dueDate.value="";
        select.value="";
        taskName.classList.remove("is-valid");
        description.classList.remove("is-valid");
        assignTo.classList.remove("is-valid");
        select.classList.remove("is-valid");
        dueDate.classList.remove("is-valid");
        taskName.classList.remove("is-invalid");
        description.classList.remove("is-invalid");
        assignTo.classList.remove("is-invalid");
        select.classList.remove("is-invalid");
        dueDate.classList.remove("is-invalid");

    }
    else{
        numValidFields=0;
        return;
    }
    //clear all fields
    





} // end of validFormFieldInput function

// add event to save button to validate and collect data from the add task form
save.addEventListener("click",validFormFieldInput);




// testing addTask method on the new taskManager
//taskManager.addTask("Car Services","Bring car to Granville Garage for Servicing","Kash","24/09/21","To Do");
// console.log(taskManager.tasks);
// console.log(taskManager.tasks[0].name);
// console.log(taskManager.tasks[0].description);
// console.log(taskManager.tasks[0].assignedTo);
// console.log(taskManager.tasks[0].status);
// console.log(taskManager.tasks[0].dueDate);











