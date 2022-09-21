const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const username = document.querySelector('input').value;

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username",username);
    paintGreetings/username;
}
function paintGreeetings(username){
    greeting.innerText = `Hello ${usernmae}`
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${savedUsername}`;
    paintGreeetings(savedUsername);
}

loginForm.addEventListener('submit',onLoginSubmit);