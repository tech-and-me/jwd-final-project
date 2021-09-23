//create a function to tranform raw data into HTML card
function createTaskHtml(name,description,toWhom,fmDate,fmMonth,status){
    const htmlCard = `<div class="col-12 col-md-6 col-lg-4 gy-5">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-9">
                    <h1 class="card-title">${name}</h1>
                    <hr>
                    <p class="card-text">${description}</p>
                </div>
                <div class="col-3">
                    <h2 class="float-right">${fmDate}</h2>
                    <span>${fmMonth}</span>
                </div>
            </div>
          <hr>
          <div class="row last-row gx-2">
            <div class="col-3">
              <p id="assignedTo">Assigned to<br />${toWhom}</p>
            </div>
            <div class="col-3 statusColor">
                <p>Status<br />${status}</p>
            </div>
            <div class="col-3">
                <a href="#" class="btn btn-primary btn-sm" id="edit">Edit</a>
            </div>
            <div class="col-3">
                <a href="#" class="btn btn-secondary btn-sm">Delete</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end of the card -->
  </div>`

  return htmlCard;

}


class TaskManager{
    //innitialization
    constructor(currentID = 0){
        this.tasks = [];
        this.currentID = currentID;
    }

    //create a method to add new task info to the tasks[] array
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

    //Create a function to tranfer colleted data to be transform to html and then store it in a array to be displayed in HTML
    render(){
        //create an array to record all the raw data that have been transformed into htmlcard
        let tasksHtmlList = [];
        
        this.tasks.forEach(element => {
            //Format the date
            const date = new Date(element.dueDate);
            //const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();''
            const formattedDate = date.getDate();
            const formattedMonth = date.toLocaleString('en-us', { month: 'short' });

            //Create the task html
            let taskHtml = createTaskHtml(
                element.name,
                element.description,
                element.assignedTo,
                formattedDate,
                formattedMonth,
                element.status
            );
            
        // Push the tranformed data (HTML backticked card) into the HTML Card list 
        tasksHtmlList.push(taskHtml);
        
        });  // end of for each iteration
        
        let cardLayout = document.querySelector("#cardLayout")
        let joinedHtmlTasks =  tasksHtmlList.join("\n");
        cardLayout.innerHTML = joinedHtmlTasks; 

    }//end of render method


}//end of class TaskManager
