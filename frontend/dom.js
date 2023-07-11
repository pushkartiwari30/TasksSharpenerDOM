document.addEventListener('DOMContentLoaded', () => {
    const task = document.querySelector('#taskname');
    const desc = document.querySelector('#description');
    const add = document.querySelector('#addtask');
    const todo = document.querySelector('.taskstodo');
    const done = document.querySelector('.tasksdone');


    axios.get("http://localhost:3000/get-todo")
        .then((response) => {
            //I will need to make 2 types of object. (By ading a flag property which will determine object is of whihc div. ; Tasks to be doone div or tasks done div) . this is becuae when i run axios.get i need data on frnt end to be dicplyed in 2 divs (based on which flag it has) 
            //console.log(response.data.data);
            response.data.data.forEach((obj) => {
                //Objects that have 'flag' property "true" will be put in "Takss Done' section of fronend
                let todoId = `${obj.id}`;
                if (obj.flag == true) {
                    // Add the task to the "Tasks Done" section
                    const newTaskDone = document.createElement('div');
                    const newTaskDoneNode = document.createTextNode(`${obj.todo} - ${obj.description}   `);
                    newTaskDone.appendChild(newTaskDoneNode);
                    done.appendChild(newTaskDone);

                    // adding a "Remove" button to remove the taks from everywhere  
                    const button3 = document.createElement('button');
                    const buttonnode3 = document.createTextNode(`Remove`);
                    button3.appendChild(buttonnode3);
                    newTaskDone.appendChild(button3);
                    //giving id Property for the front end 
                    newTaskDone.id = obj.id;
                    //console.log(newTaskDone);


                }
                else {
                    //Objects that have 'flag' property "false" will be put in "Takss to do' section of fronend
                    const newTask = document.createElement('div');
                    const newTaskNode = document.createTextNode(`${obj.todo} - ${obj.description}   `);
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
                    //giving id Property for the front end 
                    newTask.id = obj.id;

                }
            });
        })
        .catch((err) => {
            console.log(err);
        })



    add.addEventListener('click', () => {
        //console.log(task.value,desc.value);
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

        //Backend codeing 
        let obj = {
            taskvalue: task.value,
            descvalue: desc.value,
            flag: false
        }

        axios.post("http://localhost:3000/add-todo", obj)
            .then(response => {
                newTask.id = response.data.newTodoDetail.id;
                console.log("Res success");
            })
            .catch(err => {
                console.log(err);
            })
        //setting the value to empty 
        task.value = '';
        desc.value = '';

    });
    // Event listener for "Mark As Done" button
    document.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === "BUTTON" && event.target.textContent === "Mark As Done") {
            //console.log('Mark as done');
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
            
            var div = event.target.parentElement;
            // Getting the id attribute value from the li element
            const todoId = div.id;
            //console.log(todoId);
            const todoObj = {
                id: todoId
            }
            //Now we will do a post req and send this id to the backend 
            axios.post("http://localhost:3000/edit-todo", todoObj)
                .then((response) => {
                    //removing from frontend tasks t do section. 
                    console.log(div);
                    div.remove();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    });

    // Event listener for "Remove" button
    document.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === "BUTTON" && event.target.textContent === "Remove") {
            var div = event.target.parentElement;
            // Getting the id attribute value from the li element
            const todoId = div.id;
            //console.log(todoId);
            const todoObj = {
                id: todoId
            }
            //Now we will do a post req and send this id to the backend 
            axios.post("http://localhost:3000/delete-todo", todoObj)
                .then((response) => {
                    //removing from frontend
                    console.log(div);
                    div.remove();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    });

});
