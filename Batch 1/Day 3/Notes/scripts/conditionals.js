console.log("Conditional Statements")

/*
1. If
2. If Else
3. If ElseIf else
4. Ternary
*/

// let age = Number(prompt("Enter your age",0));
// let age = 18;

// console.log(age, typeof age);

/*
if (condition) {
   code to evaluate if condition is true 
}
*/
// age = '18'
// if (age===18) {
//     console.log('you are an adult')
// }

// if(1){
//     console.log("True")
// }

// If else
// age = 30;
// voterCard = false;
// if(age >= 18 && voterCard==false){
//     console.log('you are an adult but you dont have a voter card')
// }

// if(age == 25){
//     console.log("you are 25")
// }
// else{
//     console.log("you are not an adult");
// }

// if(age == 18 ){
//     console.log("your age is 18");
// }
// else if(age==20){
//     console.log("your age is 20");
// }
// else{
//     console.log("Hello")
// }

// Ternary Operators
// syntax: conditon ? value if true : value if false

// let age = 25;

// console.log(age >= 18 ? 'You are an adult':'You are not an adult');

// let result = (age ==18) ? 'You are 18': 
//             (age == 20) ? 'You are 20':
//             'Your age is neither 18 or 20';

// console.log(result);


// Switch case

/*
switch(arg){
    case 1:
        code here;
        break;
    case 2:
        code here;
        break;
    default:
        code here;
        break;
}
*/

let age = 58;

switch (age) {
    case 18:
        console.log("you are 18");
        break;
    case 20:
    case 21: 
        console.log("you are 20 or 21");
        break;
    default:
        console.log('Your age is neither 18 or 20');
}
