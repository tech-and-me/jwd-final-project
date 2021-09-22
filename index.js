const taskName = document.querySelector("#taskName");
const description = document.querySelector("#description");
const assignTo = document.querySelector("#assignTo");


let save = document.querySelector("#save");
console.log(`here is the due date: ${dueDate.value}` );

function validFormFieldInput(event){
const select = document.getElementById("status");
var valueStatus = select.options[select.selectedIndex].value;
let dueDate = document.querySelector("#dueDate");
//validate Task Name field
    event.preventDefault();
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
    
    // // validate status field
    if(valueStatus===""){
        valueStatus.classList.remove('is-valid');
        valueStatus.classList.add('is-invalid');}
    else{
        valueStatus.classList.add('is-valid');
        valueStatus.classList.remove('is-invalid');
    }
    
    // // validate Due Date field
    if(dueDate.value===""){
        dueDate.classList.remove('is-valid');
        dueDate.classList.add('is-invalid');}
    else{
        dueDate.classList.add('is-valid');
        dueDate.classList.remove('is-invalid');
    }
    
}


save.addEventListener("click",validFormFieldInput);






