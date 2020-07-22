let id;

function allowDrop(ev){
    ev.preventDefault();
}

function dragStart(ev){
    id = ev.target.id;
    // console.log(ev.target)
    // alert(id);
}

function drop(ev){
    ev.target.append(document.getElementById(id));
}

localStorage.setItem('user','Prasad');