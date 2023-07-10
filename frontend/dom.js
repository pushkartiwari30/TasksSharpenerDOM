const myForm = document.querySelector('#my-form');
const Amt = document.querySelector('#amt');
const Dsc = document.querySelector('#dsc');
const Cat = document.querySelector('#category');
const subButton = document.querySelector('.btn');
const div = document.querySelector('.newDiv');


axios.get("http://localhost:3000/get-expense")
    .then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
            let expenseId = `${response.data.data[i].id}`;
            // Displaying Information on the webpage in a UList
            const display = document.createElement("li");
            display.setAttribute("data-expense-id", expenseId); // Set expenseId as a custom attribute 
            //this attribut will be used to send the id information to the backend in the req. 

            const node = document.createTextNode(`${response.data.data[i].amount} - ${response.data.data[i].description} - ${response.data.data[i].category}   `);
            display.appendChild(node);
            const element = document.getElementById("users");
            element.appendChild(display);

            //adding a delete button  
            var deleteBtn = document.createElement('button');
            // Add classes to del button
            deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
            // Append text node
            deleteBtn.appendChild(document.createTextNode('Delete Expense'));
            // Append button to li
            display.appendChild(deleteBtn);    //adding an edit button


            var editBtn = document.createElement('button');
            // Add classes to edit button
            editBtn.className = 'btn btn-danger btn-sm float-right edit';
            // Append text node
            editBtn.appendChild(document.createTextNode('Edit Expense'));
            // Append button to diaplay
            display.appendChild(editBtn);
        }
    })
    .catch((err) => {
        console.log(err);
    })

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Amt.value === '' || Dsc.value === '' || Cat.value === '') {
        alert(" Please Fill Up The Form Completely")
    }
    else {
        let myObj = {
            Amt: Amt.value,
            Dsc: Dsc.value,
            Cat: Cat.value

        };
        //making a post req to the backend 
        axios.post("http://localhost:3000/add-expense", myObj)
            .then((response) => {
                //console.log(response.data.newExpenseDetail.id);  
                let expenseId = response.data.newExpenseDetail.id;

                // Displaying Information on the webpage in a UList
                const display = document.createElement("li");
                display.setAttribute("data-expense-id", expenseId); // Set expenseId as a custom attribute 
                //this attribut will be used to send the id information to the backend in the req. 

                const node = document.createTextNode(`${Amt.value} - ${Dsc.value} - ${Cat.value}`);
                display.appendChild(node);

                const element = document.getElementById("users");
                element.appendChild(display);
                //adding a delete button  


                var deleteBtn = document.createElement('button');
                // Add classes to del button
                deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
                // Append text node
                deleteBtn.appendChild(document.createTextNode('Delete Expense'));
                // Append button to li
                display.appendChild(deleteBtn);

                //adding an edit button
                var editBtn = document.createElement('button');
                // Add classes to edit button
                editBtn.className = 'btn btn-danger btn-sm float-right edit';
                // Append text node
                editBtn.appendChild(document.createTextNode('Edit Expense'));
                // Append button to diaplay
                display.appendChild(editBtn);

                Amt.value = '';
                Dsc.value = '';
                Cat.value = '';
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

// deleteing the user data from both UI and Local Stoareg 
var itemList = document.getElementById('users');
itemList.addEventListener('click', removeItem);
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            // Getting the id attribute value from the li element
            const expenseId = li.getAttribute("data-expense-id");
            console.log(expenseId);
            const expObj = {
                id: expenseId
            }
            //Now we will do a post req and send this id to the backend 
            axios.post("http://localhost:3000/delete-expense", expObj)
                .then((response) => {
                    itemList.removeChild(li);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
}


var itemList = document.getElementById('users');
itemList.addEventListener('click', editItem);
function editItem(e) {
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        // Getting the id attribute value from the li element
        const expenseId = li.getAttribute("data-expense-id");
        console.log(expenseId);
        const expObj = {
            id: expenseId
        }
        //Now we will do a post req and send this id to the backend 
        axios.post("http://localhost:3000/edit-expense", expObj)
            .then((response) => {
                //Deleting the Delete and Edit Buttons (Becuase ...
                //while splitting based on '-', 
                // the text of edit delete buttons hence we need to remove it)

                //Deleting the Delete and Edit Buttons  
                const editButton = li.querySelector('.edit');
                const deleteButton = li.querySelector('.delete');
                li.removeChild(editButton);
                li.removeChild(deleteButton);

                //Step2: Getting the amt,dsc value from the li element that is being edited
                const amt = li.innerText.split(' - ')[0];
                console.log(amt);
                const dsc = li.innerText.split(' - ')[1];
                console.log(dsc);
                const cat = li.innerText.split(' - ')[2];
                console.log(cat);

                // step 3: Pre populate the input Boxes
                Amt.value = amt;
                Dsc.value = dsc;
                Cat.value = cat;

                // Step 4: Removing the corresponding item from UI 
                itemList.removeChild(li);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
