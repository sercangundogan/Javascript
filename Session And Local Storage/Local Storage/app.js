// Local Storage 
// Veriler silinene kadar, bilgisayar kapansa dahi silinmez.

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50); //50 diye kaydetsek de string olarak kaydedilir

// // Get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

// localStorage.clear();

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50);

// console.log(localStorage.getItem("hareket"));

// if (localStorage.getItem("hareket") === null){
//     console.log("Sorguladığınız veri bulunmuyor");
// }

// else {
//     console.log("Sorguladığınız veri bulunuyor.")
// }

// Local Storage - Array Yazma

// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// // localStorage.setItem("todos",todos);

// // console.log(localStorage.getItem("todos"))

// localStorage.setItem("todos", JSON.stringify(todos)); // Array olarak göndermemizi sağlar, üstteki array olarak göndermedi

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");

form.addEventListener("submit",addTodo);

function addTodo(e) {
    const value = todoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);
    
    localStorage.setItem("todos", JSON.stringify(todos));


    e.preventDefault()
}