var itemList = document.querySelector('#items');

//parentElement
itemList.parentElement.style.backgroundColor='#f4f4f4';
//lastelementchild
itemList.lastElementChild.style.fontFamily="Impact,Charcoal,sans-serif";
//lastchild
console.log(itemList.lastChild);
//firstelementchild
itemList.firstElementChild.style.color='red';
///////////////////firstchild
console.log(itemList.firstChild);
//nextsibling
itemList.nextSibling.textContent='next_sibling';
//nextelementsibling(Will not work because DNE )
//itemList.nextElementSibling.style.backgroundColor='yellow';
//previoussibling
console.log(itemList.previousSibling);

//previouselementsibling
itemList.previousElementSibling.style.color='green';

//createelement Before ietem lister 
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='helloID';

//setAttribute
newDiv.setAttribute('title','Hello Div');
console.log(newDiv);
//create text node
var newDivText = document.createTextNode('Hello World');
//appendchild
newDiv.appendChild(newDivText);
console.log(newDiv);
//createchild (inserting the child into the DOM.)
var container = document.querySelector('header .container' );
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

//Create Element Before  Item 1
var newLi = document.createElement('li');
newLi.className='hello1';
newLi.id='helloID1';

//setAttribute
newLi.setAttribute('title1','Hello Li');
console.log(newLi);
//create text node
var newLiText = document.createTextNode('Hello World');
//appendchild
newLi.appendChild(newLiText);
console.log(newLi);
//createchild (inserting the child into the DOM.)
var item = document.querySelector('#items');


item.prepend(newLi);