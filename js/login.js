function login(event) {
    event.preventDefault();

    const username = loginForm.username.value;

    localStorage.setItem(KEY_USERNAME, username);
    showUsername(username);
}

function showUsername(username) {
    const greeting = document.querySelector("#greeting");
    
    greeting.innerText = `Hello! ${username}`;
    greeting.parentElement.classList.remove(CLASS_HIDDEN);

    loginForm.parentElement.classList.add(CLASS_HIDDEN);
}

const CLASS_HIDDEN = "hidden";
const KEY_USERNAME = "username";

const loginForm = document.querySelector("#login-form");

const username = localStorage.getItem(KEY_USERNAME);

if (username) {
    showUsername(username);
} else {
    loginForm.addEventListener("submit", login);
    loginForm.username.focus();
}
