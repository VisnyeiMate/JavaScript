localStorage.clear();

let username=document.getElementById('username');
 let email=document.getElementById('email');
 let password=document.getElementById('password');


function validatePassword(password){
    return password.length >= 8;
}

function validateUsername(username){
    return username.length >= 3;
}

function getNextUserId(){
    let currentUserId=localStorage.getItem('currentUserId');
    if (currentUserId===null){
        currentUserId=0;
    }
    else{
        currentUserId=parseInt(currentUserId)
    }
    currentUserId++;
    localStorage.setItem('currentUserId',currentUserId)
    return currentUserId;
}
let users=JSON.parse(localStorage.getItem('users')) || [];

function register(){
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    
    if (validatePassword(password) && validateUsername(username)) {
        let datas={
            id:getNextUserId(),
            email:email,
            password:password,
            username:username
        }
        users.push(datas);
        localStorage.setItem('users',JSON.stringify(users));
    }
    else{
        alert('Hiba!');
        return;
    }
}

let button=document.getElementById('button');
button.addEventListener('click',register);


let admin={
    email: "admin@blathy.info",
    password:'Almaecet'
}
localStorage.setItem('admin',JSON.stringify(admin));







    
        
    
