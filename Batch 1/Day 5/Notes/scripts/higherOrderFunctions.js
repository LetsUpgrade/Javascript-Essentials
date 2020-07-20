console.log("Higher Order Functions");

// MAP

let arr = [1,2,3,4,5,6];



arr.forEach((el)=>{
    console.log(el**2)
})

let square = arr.map((el)=>el**2);

let square = arr.map(function(el){
    return el**2;
})

console.log(square);


Filter

let even = arr.filter(el=>el%2==0);

let evenSquares = arr.filter(el=>el%2==0).map(el=>el**2);

console.log(even);
console.log(evenSquares);

let users = [{"user": "👩🏻‍💻"},{"user": "👨🏾‍💻"},{"user": "💃"},{"user": "👨🏻‍🎓"},{"user": "🧑🏻‍🏫"},{"user": "🦸‍♂️"},{"user": "🧟‍♂️"}];

let resultDetails = users.map(user=>{
    let mark = Math.random()*100;
    user.mark = mark;
    return user;
})

console.log(resultDetails);

let pass = resultDetails.filter(user=>{
    if(user.mark>35){
        return user;
    }
})

console.log(pass);

// Reduce
let names = ['berlin', 'denver','rio'];
let red = names.reduce((acc, val)=>{
    let obj = {
        name:val,
        len:val.length,
    }
    acc.push(obj);
    return acc;
},[]);

console.log(red);

let sum = arr.reduce((acc,val)=>{
    acc+=val;
    return acc;
},0)

console.log(sum);


