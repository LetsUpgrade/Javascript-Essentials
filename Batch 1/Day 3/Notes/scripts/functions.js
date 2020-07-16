console.log("Functions")

/*
function nameOfFunction(param if any){
    ..write code here
}

*/

function hello(){
    console.log("hello from a function");
}

hello();


let greet = function(){
    console.log("I am a function assinged to a variable");
}
greet()

let welcome = function(name="stranger"){
    console.log(`Hello ${name}`)
}

welcome('Prasad');


let addition = function(num1=0,num2=0){
    let sum = +num1 + +num2;
    return sum;
}

let result = addition('10','true');
console.log(result)

