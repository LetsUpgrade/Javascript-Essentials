console.log("Hello");

// createElement

const list  = document.querySelector('#list');

// const el = document.createElement('span');
// console.log(el);

function createElement(el){
    return document.createElement(el);
}

let li = createElement('li');
let a  = createElement('a');
// console.log(li);

list.appendChild(li);
li.appendChild(a);
a.innerHTML="Youtube";
a.setAttribute('href',"https://youtube.com");

list.insertBefore(li,document.getElementsByTagName('li')[1]);

list.removeChild(document.getElementsByTagName('li')[2])



// Regex intro

const str = "prasadgmail.com";
const pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

console.log(pattern.test(str));
