console.log("Forms 2");

function validation(){
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const namemsg = document.getElementById('namemsg');
    if(username == ""){
        namemsg.innerHTML = "username cannot be empty";
        return false;
    }
    if(username.length<4){
        namemsg.innerHTML = "username cannot be less than 4 characters";
        return false;
    }
    if(email==""){
        emailmsg.innerHTML = "email cannot be empty";
        return false;
    }
    if(!email.includes('@')){
        emailmsg.innerHTML = "email should contain @";
        return false;
    }

}