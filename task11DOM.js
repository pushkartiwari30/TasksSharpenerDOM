const myForm = document.querySelector('#my-form');
const Name = document.querySelector('#name');
const Email = document.querySelector('#email');
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
  if(Name.value ==='' || Email.value ===''){
    alert(" Please Fill Up The Form Completely")
  }
  else{
    
    console.log(Name.value);
    console.log(Email.value);

    //localStorage.setItem(Name.value,Email.value);
    let myObj= {
      Name : Name.value,
      Email : Email.value
    };
    //console.log(myObj);


    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem("User",myObj_serialized);
    //parsing is opposite of stringify
    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
    //console.log(myObj_deserialized);
  }
})