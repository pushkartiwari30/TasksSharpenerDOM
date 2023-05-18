// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });

// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     console.log('wife: i have the tickets')
//     console.log('husband:we should go in');
//     console.log('wife:no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn')
//     console.log('husband:we should go in');
//     console.log('wife:no i need butter on my popcorn');
//     return new Promise((resolve,reject)=>resolve(`${t} butter`));
// })

// const getColdDrinks= getButter.then((t)=>{
//     console.log('husband: i got some butter')
//     console.log('husband:we should go in');
//     console.log('wife:no i need coldrinks with my popcorn');
//     return new Promise((resolve,reject)=>resolve(`${t} coldrinks`));
// })

// getColdDrinks.then((t)=>{
//     console.log(`husband: i got  ${t} for us`);
//     console.log('husband: anything else darling?');
//     console.log('wife: lets go we are gettting late ');
//     console.log('husband: thanks you for the reminder ');
// })

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


//                                             Using Asysn Await :

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async()=>{
//     const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('ticket'),3000);
//     })

//     const getPopcorn = new Promise ((resolve, reject) => resolve (`popcorn`));
//     const addButter = new Promise ((resolve, reject) => resolve (`butter`));
//     const getColdDrinks = new Promise ((resolve, reject) => resolve (`colddrinks`));

//     let ticket = await promiseWifeBringingTickets;

//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband:we should go in');
//     console.log('wife:no i am hungry');

//     let popcorn = await getPopcorn;

//     console.log(`husband: i got some ${popcorn}`);
//     console.log('husband:we should go in');
//     console.log('wife:no i need butter on my popcorn');

//     let butter = await addButter;
//     console.log(`husband: i got some ${butter} on popcorn`);
//     console.log('husband: anything else darling?');
//     console.log('wife:no i need coke with my popcorn');

//     let colddrinks = await getColdDrinks;
//     console.log(`husband: i got some ${colddrinks} for us`);
//     console.log('husband: anything else darling?');
//     console.log('wife: lets go we are gettting late ');
//     console.log('husband: thanks you for the reminder ');

//     return ticket;
// }

// preMovie().then((m)=>{
//     console.log(`person3: shows${m}`);
// })

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


//                                        Using Asyns Awaitt with Prmises . all
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async()=>{
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    })

    const getPopcorn = new Promise ((resolve, reject) => resolve (`popcorn`));
    const getCandy = new Promise ((resolve, reject) => resolve (`candy`));
    const getColdDrinks = new Promise ((resolve, reject) => resolve (`colddrinks`));

    let ticket = await promiseWifeBringingTickets;
    // lets say husand is getting the opcorn and wife is getting the candy and the coke. So all these are simultaneous execution
    let [popcorn,candy, colddrinks] = await Promise.all([getPopcorn,getCandy,getColdDrinks]);
    console.log(`${popcorn}, ${candy}, ${colddrinks}`);
    
    return ticket;
}

preMovie().then((m)=>{
    console.log(`person3: shows${m}`);
})

console.log('person4: shows ticket');
console.log('person5: shows ticket');

