// selector
const todoInput = document.querySelector('.todo-input');

const todoButton = document.querySelector('.todo-button');

const todoList = document.querySelector('.todo-list');

//event


todoButton.addEventListener('click', addTodo)

todoList.addEventListener('click' , deleteCheck)

//function

function addTodo(event) {

    event.preventDefault() ;

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo  = document.createElement('li') ;
    newTodo.classList.add('todo-item') ;
    newTodo.innerText= todoInput.value ;
todoDiv.appendChild(newTodo) ;

const completedButton = document.createElement('button');
completedButton.classList.add('complete-btn');
completedButton.innerHTML = '<i class = "fas fa-check"></i>';
todoDiv.appendChild(completedButton);

const trashButton = document.createElement('button');
trashButton.classList.add('trash-btn');
trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv) ;
todoInput.value = '' ;
}

function deleteCheck(e) {
    const item = e.target ;
    if (item.classList[0] === 'trash-btn') {
const todo = item.parentElement ;
todo.remove() ;
    }
if (item.classList[0]=== 'complete-btn'){
    const todo = item.parentElement ;
    todo.classList.toggle('completed')
}
}