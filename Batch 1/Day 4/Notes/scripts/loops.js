console.log("Loops")

// For Loop
 /*
 
 for(initializer;condition;increment/decrement) {
     code to be repeated until the condition is satisfied
 } 
 */
 let arr = ['apple', 'mango','orange','banana'];

//  Break statement breaks out of the loop

// Continue statement skips the iteration

 for(let i=1;i<=10;i++){
    //  if(i==3){
    //      break;
    //  }
    // if(i%2==0){
    //     continue;
    // }
    // if(i==3){
    //     continue;
    // }
    // debugger;   
    let num = i;
     console.log(num);
 }
 console.log('done');

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// While
// while(some condition){
//     do this thing
// }
// let i=1;
// while(i<=10){
//    console.log(i);
//    i++;
// }

// Do while
// do{
//         run this code
// }while(this condition is true)

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<0)

// For each
// arr.forEach(function(fruit){
//     console.log(fruit);
// })



// let person = {
//     name:"Prasad",
//     age:24,
//     city:'Mumbai',
// }

// for(key in person){
//     console.log(`The key is ${key} and the value is ${person[key]}`);
// }