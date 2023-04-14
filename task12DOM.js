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
    let user = "User "+JSON.stringify(Email.value);
    localStorage.setItem(user,myObj_serialized);
   
    //parsing is opposite of stringify
    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
    //console.log(myObj_deserialized);


    // Displaying Information on the webpage 
    const display = document.createElement("displayuser");
    const node = document.createTextNode(`${Name.value} - ${Email.value} - ${Phone.value} `);
    display.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(display);

  }
})