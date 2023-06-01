document.addEventListener('DOMContentLoaded', function () {
    const price = document.querySelector('#price');
    const product = document.querySelector('#product');
    const addProduct = document.querySelector('#addproduct');
    const productsAdded = document.querySelector('.productsadded');
    const total = document.querySelector('.total');

    //let sum=0;
    // const totalPrice = document.createElement('div');
    // const totalPriceNode= document.createTextNode(`Rs 0`);
    // totalPrice.appendChild(totalPriceNode);
    // total.appendChild(totalPrice);


    let sum = 0;

    let getSum = 0;
    axios.get('https://crudcrud.com/api/470b7796d4ec4134a5b2d2b0869cd1f9/seller')
        .then(response => {
            response.data.forEach((obj) => {
                const newProd = document.createElement('div');
                const newProdNode = document.createTextNode(`${obj.price} - ${obj.product}`);
                newProd.appendChild(newProdNode);
                productsAdded.appendChild(newProd);

                const delButton = document.createElement('button');
                const delButtonNode = document.createTextNode('Delete Product');
                delButton.appendChild(delButtonNode);
                newProd.appendChild(delButton);

                //giving id Property for the front end 
                newProd.id = obj._id;

                //calculating sum of all the object prices and displaying the total 
                getSum = getSum + eval(obj.price);
                console.log(getSum);
                sum = getSum;
                total.innerHTML = `Rs ${sum}`;
            });
        })
        .catch(err => {
            console.log(err);
        })

    addProduct.addEventListener('click', () => {
        console.log(price.value, product.value);

        const newProd = document.createElement('div');
        const newProdNode = document.createTextNode(`${price.value} - ${product.value}`);
        newProd.appendChild(newProdNode);
        productsAdded.appendChild(newProd);

        const delButton = document.createElement('button');
        const delButtonNode = document.createTextNode('Delete Product');
        delButton.appendChild(delButtonNode);
        newProd.appendChild(delButton);

        let obj = {
            price: price.value,
            product: product.value,
        }

        axios.post('https://crudcrud.com/api/470b7796d4ec4134a5b2d2b0869cd1f9/seller', obj)
            .then(response => {
                console.log(response);
                newProd.id = response.data._id;
            })
            .catch(err => {
                console.log(err);
            })

        //Adding thet product price to the total 
        sum = sum + eval(price.value);
        total.innerHTML = `Rs ${sum}`;
        //setting value of input bpoxex to "";
        price.value = '';
        product.value = '';

    });

    //Event Listener for Delete Button
    document.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === "BUTTON" && event.target.textContent === "Delete Product") {
            //Removinf from Backend
            axios.delete(`https://crudcrud.com/api/470b7796d4ec4134a5b2d2b0869cd1f9/seller/${event.target.parentNode.id}`)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                })
            //Removing thet product price from the total
            let subtract = event.target.parentNode.textContent.split(" ")[0];

            sum = sum - eval(subtract);
            total.innerHTML = `Rs ${sum}`;
            //Removing from front end 
            event.target.parentNode.remove();
        }
    })


});


