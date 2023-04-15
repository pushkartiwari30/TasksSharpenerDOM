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
 