console.log("DOM Basics");

// Id - #
// Class - .

// getting the elements
/*
1. getElementById
2. getElementsByClassName
3. getElementsByTagName
4. querySelector
5. querySelectorAll

*/

const title = document.getElementById('title');

console.log(title);
console.log(title.innerHTML);
console.log(title.innerText);

const para = document.getElementsByClassName('imp');

console.log(para);

const data = document.getElementsByTagName('p');

console.log(data);

// for (let index = 0; index < data.length; index++) {
//     const element = data[index];
//     console.log(element)
    
// }

// const dataarr = [...data];
const dataarr = Array.from(data);

dataarr.forEach(el=>{
    console.log(el);
})

// console.log(document.querySelector('.imp'));

// const data1 = document.querySelectorAll('.imp');
const data1 = document.querySelectorAll('p');
console.log(data1);

// data1.forEach(el=>{
//     console.log(el);
// })



// Changing Attributes

const attr = document.getElementById('attribute');

console.log(attr.getAttribute('id'));

// attr.setAttribute('style','color:red;');
// attr.setAttribute('style','background-color:blue');

attr.classList.add('blue');
attr.classList.add('bgYellow');
// attr.classList.remove('blue');
// attr.classList.toggle('blue');
// attr.classList.toggle('blue');


// attr.style.color = "red";
// attr.style.backgroundColor = "yellowgreen";
// attr.style.backgroundColor = "";


let fruits = ['apple','orange','watermelon','mango','grapes'];


console.log(fruits);

const list = document.querySelector('#list');
console.log(list);

fruits.forEach(fruit=>{
    // list.innerText += `<li>${fruit}</li>`;
    list.innerHTML += `<li>${fruit}</li>`;
})


// dataarr

dataarr.forEach(para=>{
    if(para.innerText.includes('amet')){
        para.classList.add('highlight');
    }
})


// Button Click

function showAlert(){
    alert("Hey I am an alert from the button");
}

const button = document.getElementById('btn');

button.onclick = function(){
    alert("Hey I am an alert from the button");
}


// get name from user and change the title
// const name = prompt("Enter your name","Anonymous");

// title.innerText += `Welcome to the family ${name}`;


const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}


const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);








