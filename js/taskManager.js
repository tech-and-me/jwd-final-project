// function createTaskHtml(name,description,assingedTo,dueDate,status){


// }


class TaskManager{
    constructor(currentID = 0){
        this.tasks = [];
        this.currentID = currentID;
    }

    addTask(name,description,assignedTo,dueDate,status){
        const newTask ={
            id: this.currentID++,
            name:name,
            description:description,
            assignedTo:assignedTo,
            dueDate:dueDate,
            status:status
        }
        this.tasks.push(newTask);

    }
}
