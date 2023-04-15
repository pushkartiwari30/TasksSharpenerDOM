const myForm = document.querySelector('#my-form');
const Name = document.querySelector('#name');
const Email = document.querySelector('#email');
const Phone = document.querySelector('#phone');
const subButton = document.querySelector('.btn');
const div= document.querySelector('.newDiv');


Name.addEventListener('mouseover',(e) =>{
  e.preventDefault();
  document.querySelector('#name').style.background = 'white';
})
Email.addEventListener('mouseover',(e) =>{
  e.preventDefault();
  document.querySelector('#email').style.background = 'white';
})

Name.addEventListener('mouseout',(e) =>{
  e.preventDefault();
  document.querySelector('#name').style.background = 'none';
})
Email.addEventListener('mouseout',(e) =>{
  e.preventDefault();
  document.querySelector('#email').style.background = 'none';
})

myForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(Name.value ==='' || Email.value ==='' || Phone.value ==='' ){
    alert(" Please Fill Up The Form Completely")
  }
  else{
    
    console.log(Name.value);
    console.log(Email.value);
    console.log(Phone.value);

    //localStorage.setItem(Name.value,Email.value);
    let myObj= {
      Name : Name.value,
      Email : Email.value,
      Phone : Phone.value
    };
    //console.log(myObj);
    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem(Email.value,myObj_serialized);
   
    //parsing is opposite of stringify
    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
    //console.log(myObj_deserialized);

    // Displaying Information on the webpage in a UList
    const display = document.createElement("li");
    const node = document.createTextNode(`${Name.value} - ${Email.value} - ${Phone.value}`);
    display.appendChild(node);
  
    const element = document.getElementById("users");
    element.appendChild(display);


    //adding a delete button  
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('Delete'));
    // Append button to li
    display.appendChild(deleteBtn);

    //adding an edit button
    var editBtn = document.createElement('button');
    // Add classes to edit button
    editBtn.className = 'btn btn-danger btn-sm float-right edit';
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));
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

      // Getting the email value from the li element
      const email = li.innerText.split(' - ')[1];
      console.log(email);
      // Removing the corresponding item from local storage
      localStorage.removeItem(email);
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
    //while splitting based on '-', the string of phone includes...
    // the text of edit delete buttons hence we need to remove it)

      var li = e.target.parentElement;
      //Deleting the Delete and Edit Buttons  
      const editButton = li.querySelector('.edit');
      const deleteButton = li.querySelector('.delete');
      li.removeChild(editButton);
      li.removeChild(deleteButton);


      //Step2: Getting the name,email, value from the li element that is being edited
      const name = li.innerText.split(' - ')[0];
      console.log(name);
      const email = li.innerText.split(' - ')[1];
      console.log(email);
      const phone = li.innerText.split(' - ')[2];
      console.log(phone);
      
       
      // step 3: Pre populate the input Boxes by seting the Name, Email, PhoneNumber to name, email, number

      Name.value = name; 
      Email.value = email; 
      Phone.value = phone; 

      // Step 4: Removing the corresponding item from UI and local storage
      itemList.removeChild(li);
      localStorage.removeItem(email);
    
  }
}
