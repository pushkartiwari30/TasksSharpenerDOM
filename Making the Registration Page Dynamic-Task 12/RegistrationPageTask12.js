const posts = [
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}


function createPost(post){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
        
            if(!error){
                resolve();
            }else{
                reject('Erroe: Something went wrong');
            }
        },2000);

    })
    
}

const user = {
    userName: 'Pushkar',
    userLastActivityTime: '30th Jan 2023'
}


function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop()
                resolve();
        },1000);

    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                // updating user's last activity time to the current time 
                newDate = new Date();
                user.userLastActivityTime = newDate;
                console.log("After Creating Post 3 >>>>>>>>>>");
                console.log("Posts >>",posts);
                console.log("User's Last Activity Time : ", newDate);
                console.log(user);
                resolve();
        },1000);

    })
}
console.log("Before Creating Post 3, User Last Activity Time Is : Wed May 17 2023 06:22:27");


createPost({title:'Post Three',body:'This is post three'}).then(updateLastUserActivityTime).then(deletePost).then(getPosts);

//Output should look like :
//// creating a new  object , NAme of the user, Last Activity time of the user   and update activity time in that object 
/* Object = {
    user's name : Activity Time 
}
*/

//BEfore Creating POst 4, user lastactivity time = Fri Sep 02 2022 .....
// after craeting post 4 >>>>>>>>>>>>
// posts >> (3)[{...},{...},{...}]
// User Last activity time  1662119397701 