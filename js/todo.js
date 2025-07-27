function enrollTodo(event) {
    event.preventDefault();

    const content = todoFormEl.todo.value.trim();
    todoFormEl.todo.value = "";
    
    const todo = {
        id: Date.now(),
        content: content,
    };

    if (content !== "") {
        saveTodo(todo);
        draw(todo);
    }
}

function saveTodo(todo) {
    todos.push(todo);
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

function draw(todo) {
    const span = document.createElement("span");
    span.innerText = todo.content;

    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteTodo);

    const deleteImg = document.createElement("img");
    deleteImg.src = "./img/delete.svg";
    deleteBtn.appendChild(deleteImg);

    const li = document.createElement("li");
    li.id = todo.id;

    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoListEl.appendChild(li);
}

function deleteTodo(event) {
    const parentEl = event.target.parentElement;
    parentEl.remove();

    todos = todos.filter((todo) => todo.id !== parseInt(parentEl.id));
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

const KEY_TODOS = "todos";

let todos = [];

const todoListEl = document.querySelector("#todo-list");
const todoFormEl = document.querySelector("#todo-form");

todoFormEl.addEventListener("submit", enrollTodo);

const savedTodos = JSON.parse(localStorage.getItem(KEY_TODOS));

if (savedTodos) {
    savedTodos.forEach(todo => {
        todos.push(todo);
        draw(todo);
    });
}