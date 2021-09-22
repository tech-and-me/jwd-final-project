const taskName = document.querySelector("#taskName");
const description = document.querySelector("#description");
const assignTo = document.querySelector("#assignTo");
const dueDate = document.querySelector("#dueDate");
const select = document.querySelector("#status");

// const valueStatus = document.querySelector('#status');
const save = document.querySelector("#save");

function validFormFieldInput(event){
    var valueStatus = select.options[select.selectedIndex].value;
    console.log(`here is the due date: ${dueDate.value}` );
    console.log(`here is the value status: ${valueStatus}` );

//validate Task Name field
    event.preventDefault();
    // event.stopPropagation();
    console.log(`here is the value status: ${valueStatus}` );
    if(taskName.value.length<=5){
        taskName.classList.remove('is-valid');
        taskName.classList.add('is-invalid');}
    else{
        taskName.classList.add('is-valid');
        taskName.classList.remove('is-invalid');
    }

// validate description field
    if(description.value.length<=5){
        description.classList.remove('is-valid');
        description.classList.add('is-invalid');}
    else{
        description.classList.add('is-valid');
        description.classList.remove('is-invalid');
    }

    // validate assigned to field
    if(assignTo.value.length<=5){
        assignTo.classList.remove('is-valid');
        assignTo.classList.add('is-invalid');}
    else{
        assignTo.classList.add('is-valid');
        assignTo.classList.remove('is-invalid');
    }

   
    // validate Due Date field
    
    if(dueDate.value===""){

        dueDate.classList.remove('is-valid');
        dueDate.classList.add('is-invalid');}
    else{
        dueDate.classList.add('is-valid');
        dueDate.classList.remove('is-invalid');
    }

    // validate status field
    if(valueStatus===""){
        console.log('Status is not selected yet');
        select.classList.remove('is-valid');
        select.classList.add('is-invalid');}
    else{
        console.log('Status is selected yet');
        select.classList.add('is-valid');
        select.classList.remove('is-invalid');
    }
    
}


save.addEventListener("click",validFormFieldInput);


newTask = new taskManager("Hi");
console.log(newTask);



