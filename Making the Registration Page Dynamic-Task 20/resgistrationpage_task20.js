const myForm = document.querySelector('#my-form');
const Name = document.querySelector('#name');
const Email = document.querySelector('#email');
const Phone = document.querySelector('#phone');
const subButton = document.querySelector('.btn');
const div= document.querySelector('.newDiv');


//getting data from api and showing on screen evertime we refresh
    function gettingData (){
      axios.get("https://crudcrud.com/api/8bf0db3441e3415b8b10190bc28729ad/userData")
      .then((response)=>{
        console.log(response);
        for(var i=0; i<response.data.length; i++){
          response.data[i];
          let userid = `${response.data[i]._id}`;
          const display = document.createElement("li");
          const node = document.createTextNode(`${response.data[i].Name} - ${response.data[i].Email} - ${response.data[i].Phone}   `);
          display.appendChild(node);
          const element1 = document.getElementById("users");
          element1.appendChild(display);

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
            deleteBtn.onclick =() => {
              removeItem(userid);
            }

            editBtn.onclick =(e) => {
              
              var li = e.target.parentElement;
              // Getting the name,email, value from the li element that is being edited
              const name = li.innerText.split(' - ')[0];
              const email = li.innerText.split(' - ')[1];
              const phone = li.innerText.split(' - ')[2];
              // now the phoen has extra elements in the string that is : ' DeleteEdit'. So i need to remove it by follwing code :  
              //console.log(phone); => 1 DeleteEdit
              let newPhone = phone.slice(0, -11);
              // console.log(phone1); =>  1
              // Pre populate the input Boxes by seting the Name, Email, PhoneNumber to name, email, number
              Name.value = name; 
              Email.value = email; 
              Phone.value = newPhone; 
              removeItem(userid);
              console.log("Now edit the details correctly");
            }
        }
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    gettingData();

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
    
    let myObj= {
      Name : Name.value,
      Email : Email.value,
      Phone : Phone.value
    };
    
    //adding data to the API
    axios.post("https://crudcrud.com/api/8bf0db3441e3415b8b10190bc28729ad/userData",myObj)
      .then((response)=>{
        console.log(response);

        var li = e.target.parentElement;
        //Empty the input Boxes for new entry by seting the name, email, number to ""
        const name = '';
        const email = '';
        const phone = '';
        
        // Seeting the name, Email, Phone values to name, email, phone 
        Name.value = name; 
        Email.value = email; 
        Phone.value = phone; 
        gettingData();
      })
      .catch((err)=>{
        console.log(err);
    })
    //clearing the whole front end before running gettingData fn (below code will run before axios POST operation)
    const parentElement = document.getElementById('users'); 
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }
})

// deleteing the user data from backend
function removeItem(obj){
    if(confirm('Are You Sure?')){
      axios.delete(`https://crudcrud.com/api/8bf0db3441e3415b8b10190bc28729ad/userData/${obj}`)
      .then(response => {
        // Handle the success response
        console.log('Record deleted successfully');
        console.log(response);
        //clearing the whole front end before running gettingData fn 
        const parentElement = document.getElementById('users'); 
        while (parentElement.firstChild) {
          parentElement.removeChild(parentElement.firstChild);
        }
        gettingData();
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    }
  }
  