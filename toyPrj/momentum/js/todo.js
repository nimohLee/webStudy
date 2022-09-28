const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function removeToDosFromStorage(){
    localStorage.setItem(TODOS_KEY,todos);
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement('button');
    button.innerText = "❌";
   button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.append(li);
    saveToDos();
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    const removedTodo = todos.filter(todo=> {return todo.id!==parseInt(li.id)});
 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
    id: Date.now()}
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parseToDos = JSON.parse(savedToDos);
    todos = parseToDos;
    parseToDos.forEach(paintTodo);
}

toDoForm.addEventListener('submit',handleToDoSubmit);

