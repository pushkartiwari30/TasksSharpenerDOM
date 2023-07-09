const myForm = document.querySelector('#my-form');
const Name = document.querySelector('#name');
const Email = document.querySelector('#email');
const Phone = document.querySelector('#phone');
const subButton = document.querySelector('.btn');
const div = document.querySelector('.newDiv');


//getting data from api and showing on screen evertime we refresh
function gettingData() {
  axios.get("http://localhost:3000/get-user")
    .then((response) => {
      for(var i=0; i<response.data.data.length; i++){
      //response.data[i];
      let userid = `${response.data.data[i].email}`; 
      const display = document.createElement("li");
      const node = document.createTextNode(`${response.data.data[i].name} - ${response.data.data[i].email} - ${response.data.data[i].phonenumber}   `);
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

      deleteBtn.onclick =(event) => {
        removeItem(userid,event);
      }
      }
    
  })
  .catch ((error) => {
    console.log(error);
  })
}
gettingData();

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (Name.value === '' || Email.value === '' || Phone.value === '') {
    alert(" Please Fill Up The Form Completely")
  }
  else {
    let myObj = {
      Name: Name.value,
      Email: Email.value,
      Phone: Phone.value
    };

    //adding data to the API
    axios.post("http://localhost:3000/add-user", myObj)
      .then((response) => {
        const display = document.createElement("li");
        const node = document.createTextNode(`${response.data.newUserDetail.name} - ${response.data.newUserDetail.email} - ${response.data.newUserDetail.phonenumber}   `);
        console.log(response.data.newUserDetail.name);
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
        let userid = `${response.data.newUserDetail.email}`
        deleteBtn.onclick =(event) => {
          removeItem(userid,event);
        }

        //Empty the input Boxes for new entry by seting the name, email, number to ""
        const name = '';
        const email = '';
        const phone = '';

        // Seeting the name, Email, Phone values to name, email, phone 
        Name.value = name;
        Email.value = email;
        Phone.value = phone;
      })
      .catch((err) => {
        console.log(err);
      })
  }
})

// deleteing the user data from backend
function removeItem(userid,event) {
   if (confirm('Are You Sure?')) {
    let objEmail= { // i need to do this to get th right format otherwise the backend code does not read this properly and req.body is {}
      email: `${userid}`
    }
    console.log("objEmail=");
    console.log(objEmail);
    axios.post("http://localhost:3000/delete-user", objEmail)
      .then(response => {
        // Handle the success response
        const liElement = event.target.parentNode;
        // Now you have access to the <li> element and can perform further operations

        // Remove the <li> element from the parent <ul> element
         liElement.parentNode.removeChild(liElement);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
   }
} 
