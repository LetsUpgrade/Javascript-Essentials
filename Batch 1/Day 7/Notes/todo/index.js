console.log("Todo List");

const button = document.querySelector('#btn');
const list = document.querySelector('#list');


button.onclick = function(){
    let item = document.querySelector("#todo").value;
    console.log(item, typeof(item));
    let text = document.createTextNode(item);
    console.log(text);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();
}

// button.addEventListener('click',function(){

// })