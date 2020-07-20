console.log("Promises");

let users = [
    {
        name:'Berlin',
        email:'b@gmail.com',
    },
    {
        name:'Rio',
        email:'r@gmail.com',
    },
    {
        name:'Tokyo',
        email:'t@gmail.com',
    },
]

function getUsers(){
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    },1000);
}

// function createUser(user, callback){
//     setTimeout(()=>{
//         users.push(user);
//         callback();
//     },3000);
// }

// // getUsers();

// createUser({name:'Denver',email:'d@gmail.com'}, getUsers);


// Promises

// function createUser(user){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             users.push(user);

//             const error = false;

//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject("Oops an error occured");
//             }

//         }, 3000);
//     })
// }

// createUser({name:'Denver',email:'d@gmail.com'})
// .then(getUsers)
// .catch(error=>console.log(error));


// Example two

// const userData = new Promise((resolve,reject)=>{
//     const error = false;

//     if(error){
//         reject("an error occured");
//     }
//     else{
//         resolve({
//             firstname:"Sachin",
//             age:24,
//             class:'12th',
//         })
//     }


// });

// userData
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error))


// Async Await

const photos = [];
async function photoUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        },3000)
    })

    let result = await status;
    console.log(photos.length);
}

photoUpload();
photoUpload();