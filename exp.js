const myForm = document.querySelector('#my-form');
const Amt = document.querySelector('#amt');
const Dsc = document.querySelector('#dsc');
const Cat = document.querySelector('#category');
const subButton = document.querySelector('.btn');
const div= document.querySelector('.newDiv');



myForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(Amt.value ==='' || Dsc.value ==='' || Cat.value ==='' ){
    alert(" Please Fill Up The Form Completely")
  }
  else{
    
    console.log(Amt.value);
    console.log(Dsc.value);
    console.log(Cat.value);

    //localStorage.setItem(Amt.value,Dsc.value);
    let myObj= {
        Amt : Amt.value,
        Dsc : Dsc.value,
        Cat : Cat.value
    
    };
    //console.log(myObj);
    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem(Dsc.value,myObj_serialized);
   
    //parsing is opposite of stringify
    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
    //console.log(myObj_deserialized);

    // Displaying Information on the webpage in a UList
    const display = document.createElement("li");
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
    
  }
})

// deleteing the user data from both UI and Local Stoareg 
var itemList = document.getElementById('users');
itemList.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);

      // Getting the dsc value from the li element
      const dsc = li.innerText.split(' - ')[1];
      // Removing the corresponding item from local storage
      localStorage.removeItem(dsc);
    }
  }
}
 
// Editing has 3 things to be done : 
// - Deletng the buttons (Reason explained below)
// - Pre Populate the input boxes
// - Deleting from UI and Local Storage

var itemList = document.getElementById('users');
itemList.addEventListener('click', editItem);
function editItem(e){
  if(e.target.classList.contains('edit')){
    
    // Step 1 : Deleting the Delete and Edit Buttons (Becuase ...
    //while splitting based on '-', 
    // the text of edit delete buttons hence we need to remove it)

      var li = e.target.parentElement;
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


      Amt.value=amt;
      Dsc.value=dsc;
      Cat.value=cat;

      // Step 4: Removing the corresponding item from UI and local storage
      itemList.removeChild(li);
      localStorage.removeItem(dsc);
    
  }
}
