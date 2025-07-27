function login(event) {
    event.preventDefault();

    const username = loginForm.username.value;

    localStorage.setItem(KEY_USERNAME, username);
    showUsername(username);
}

function showUsername(username) {
    const greeting = document.querySelector("#greeting");
    greeting.innerText = `Hello! ${username}`;
    
    mainContainer.classList.remove(CLASS_HIDDEN);
    changeNameBtn.parentElement.classList.remove(CLASS_HIDDEN);

    loginForm.parentElement.classList.add(CLASS_HIDDEN);
}

function showLoginPanel() {
    mainContainer.classList.add(CLASS_HIDDEN);
    changeNameBtn.parentElement.classList.add(CLASS_HIDDEN);
    
    loginForm.username.value = localStorage.getItem(KEY_USERNAME);
    loginForm.parentElement.classList.remove(CLASS_HIDDEN);
}

const CLASS_HIDDEN = "hidden";
const KEY_USERNAME = "username";

const loginForm = document.querySelector("#login-form");
const mainContainer = document.querySelector("#main-container");
const changeNameBtn = document.querySelector("#change-name-btn");

loginForm.addEventListener("submit", login);
changeNameBtn.addEventListener("click", showLoginPanel);

const username = localStorage.getItem(KEY_USERNAME);

if (username) {
    showUsername(username);
} else {
    loginForm.username.focus();
}
