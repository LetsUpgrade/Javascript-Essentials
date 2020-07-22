console.log("Forms");

// const loginForm = document.forms.myForm;
const loginForm = document.getElementById("myForm");

const message = document.getElementById('msg');

loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    // console.log(event.target.email.value);
    if(loginForm.name.value == ""){
        message.innerHTML = "Name should not be empty";
    }
})
