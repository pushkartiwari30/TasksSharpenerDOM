document.addEventListener('DOMContentLoaded', () => {
    const task=document.querySelector('#taskname');
    const desc=document.querySelector('#description');
    const add=document.querySelector('#addtask');
    const todo=document.querySelector('.taskstodo');
    const done=document.querySelector('.tasksdone');

    
    add.addEventListener('click', () => {
        console.log(task.value,desc.value);
        const newTask = document.createElement('div');
        const newTaskNode = document.createTextNode(`${task.value} - ${desc.value}   `);
        newTask.appendChild(newTaskNode);
        todo.appendChild(newTask);
        
        // add 2 buttons 
        // button 1 : "Done" to move the task to doen section
        const button1 = document.createElement('button');
        const buttonnode1 = document.createTextNode(`Mark As Done`);
        button1.appendChild(buttonnode1);
        newTask.appendChild(button1);
        // button 2 : "Remove" to remove the taks from everywhere  
        const button2 = document.createElement('button');
        const buttonnode2 = document.createTextNode(`Remove`);
        button2.appendChild(buttonnode2);
        newTask.appendChild(button2);


        //setting the value to empty 
        task.value='';
        desc.value='';

        //Backend codeing 
        let obj={
            taskvalue:task.value,
            descvalue:desc.value
        }

        axios.post("https://crudcrud.com/api/48425fb366014678a99b8795e1b93c3e/todolist",obj)
        .then(response =>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
        })
        
    });
    // Event listener for "Mark As Done" button
    document.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === "BUTTON" && event.target.textContent === "Mark As Done") {
            console.log('Mark as done');
            
             // Get the input fields and their values
            const taskValue = event.target.parentNode.firstChild.textContent.trim();
            console.log(taskValue);
           
            // Add the task to the "Tasks Done" section
            const done = document.querySelector('.tasksdone');
            const newTaskDone = document.createElement('div');
            const newTaskDoneNode = document.createTextNode(`${taskValue}`);
            newTaskDone.appendChild(newTaskDoneNode);
            done.appendChild(newTaskDone);

            // adding a "Remove" button to remove the taks from everywhere  
            const button3 = document.createElement('button');
            const buttonnode3 = document.createTextNode(`Remove`);
            button3.appendChild(buttonnode3);
            newTaskDone.appendChild(button3);
    
            // Remove the task from the "Tasks to do" section
            event.target.parentNode.remove();

        }
    });

    // Event listener for "Remove" button
    document.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === "BUTTON" && event.target.textContent === "Remove") {
            console.log('Removed');
        }
    });

});