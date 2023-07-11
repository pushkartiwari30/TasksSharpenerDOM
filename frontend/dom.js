const myForm = document.querySelector('#my-form');
const Candy = document.querySelector('#candy'); //Amt
const Dsc = document.querySelector('#dsc');  //dsc
const Price = document.querySelector('#price');  // cat
const Qty = document.querySelector('#qty');
const subButton = document.querySelector('.btn');
const div = document.querySelector('.newDiv');



axios.get("http://localhost:3000/get-candy")
    .then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
            console.log(response.data.data[i]);
            let expenseId = response.data.data[i].id;
            //Displaying Information on the webpage in a UList
            const display = document.createElement("li");
            display.setAttribute("data-candy-id", expenseId);

            const node = document.createTextNode(`${response.data.data[i].candy} - ${response.data.data[i].description} - ${response.data.data[i].price} - ${response.data.data[i].quantity}   `);

            display.appendChild(node);
            const element = document.getElementById("candies");
            element.appendChild(display);
            // Adding a buy button
            var deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
            // Append text node
            deleteBtn.appendChild(document.createTextNode('Buy 1'));
            // Append button to li
            display.appendChild(deleteBtn);

            // Adding a buy button
            var deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
            // Append text node
            deleteBtn.appendChild(document.createTextNode('Buy 2'));
            // Append button to li
            display.appendChild(deleteBtn);

            // Adding a buy button
            var deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
            // Append text node
            deleteBtn.appendChild(document.createTextNode('Buy 3'));
            // Append button to li
            display.appendChild(deleteBtn);



        }
    })
    .catch((err) => {
        console.log(err);
    })

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Candy.value === '' || Price.value === '' || Qty.value === '') {
        alert("Please Fill Up The Form Completely");
    } else {
        let myObj = {
            Candy: Candy.value,
            Dsc: Dsc.value,
            Price: Price.value,
            Qty: Qty.value
        };
        // Making a post request to the backend
        axios.post("http://localhost:3000/add-candy", myObj)
            .then((response) => {
                let expenseId = response.data.id;

                //Displaying Information on the webpage in a UList
                const display = document.createElement("li");
                display.setAttribute("data-candy-id", expenseId);

                const node = document.createTextNode(` ${Candy.value} - ${Dsc.value} - ${Price.value} - ${Qty.value} `);
                display.appendChild(node);

                const element = document.getElementById("candies");
                element.appendChild(display);
                // Adding a buy button
                var deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
                // Append text node
                deleteBtn.appendChild(document.createTextNode('Buy 1'));
                // Append button to li
                display.appendChild(deleteBtn);

                // Adding a buy button
                var deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
                // Append text node
                deleteBtn.appendChild(document.createTextNode('Buy 2'));
                // Append button to li
                display.appendChild(deleteBtn);

                // Adding a buy button
                var deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
                // Append text node
                deleteBtn.appendChild(document.createTextNode('Buy 3'));
                // Append button to li
                display.appendChild(deleteBtn);

                Candy.value = '';
                Dsc.value = '';
                Price.value = '';
                Qty.value = '';
            })
            .catch((err) => {
                console.log(err);
            });
    }
});

document.addEventListener('click', (event) => {
    let qt = 0;
    if (event.target && event.target.nodeName === "BUTTON" && event.target.textContent === "Buy 1") {
        qt = 1;
    }
    else if (event.target && event.target.nodeName === "BUTTON" && event.target.textContent === "Buy 2") {
        qt = 2;
    }
    else if (event.target && event.target.nodeName === "BUTTON" && event.target.textContent === "Buy 3") {
        qt = 3;
    }
    var li = event.target.parentElement;
    // Getting the id attribute value from the li element
    const expenseId = li.getAttribute("data-candy-id");
    //console.log(expenseId);
    const expObj = {
        id: expenseId,
        lessBy: qt
    }
    //Now we will do a post req and send this id to the backend 
    axios.post("http://localhost:3000/edit-candy", expObj)
        .then((response) => {
            //This is method 2 of chnagig UI data
            // getting all the new values (only quantity would have been chnaged)
            // CREATING A NEW STRING FROM THE NEW DATA fetched  
            //chnaging the text content of the li to new string 
            const oldNode = li.childNodes[0]; // Assuming the value is always the third child node
            const oldText = oldNode.textContent;
            const oldQty = oldText.split(' - ')[3];
            const leftSideData = oldText.split(' - ').slice(0, 3).join(' - ');
            const newQty = oldQty - qt;
            const finalData = leftSideData + " - " + `${newQty}`+" ";
            console.log(finalData);
            li.childNodes[0].textContent = finalData;
        })
        .catch((err) => {
            console.log(err);
        })
});
