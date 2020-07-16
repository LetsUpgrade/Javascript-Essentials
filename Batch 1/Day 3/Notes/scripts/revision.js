console.log("Lets Revise")

// Difference between Number() and parseInt()

let strnum = '1234hello'

console.log(`The original value is ${strnum} & its type is ${typeof strnum}`);
console.log(Number(strnum));

console.log(parseInt(strnum));


// Another way to convert a string to a number

let one = '1';
let two = '2'; 

console.log(+one + +two);
