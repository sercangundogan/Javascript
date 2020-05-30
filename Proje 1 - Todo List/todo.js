// Tüm Elementleri Seçme 
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();



function eventListeners() { // Tüm event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos)
}

function addTodo(e) {
    // const newTodo = todoInput.value; // Başında veya sonunda boşluk olursa onları da alıyor. 
    const newTodo = todoInput.value.trim() // O yüzden trim fonksiyonunu kullandık
    
    if(newTodo ==="") {
        showAlert("danger", "Lütfen bir todo girin..");
    }
    
    else if (isUnique(newTodo) === false) {
        console.log("Bu todo zaten bulunuyor")
        showAlert("danger", "Bu todo zaten bulunuyor.")
    }

    else {
        addTodotoUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo Başarıyla Eklendi");
        

        
        

    e.preventDefault();
    }

}

function isUnique(newTodo) {
    todos = getTodosFromStorage();
    console.log(todos)
    for (let todo of todos) {
        if (todo == newTodo) {
            return false
        }
        
    }
    return true
}

function addTodotoUI(newTodo) { //String değerini list item olarak UI'ya ekleyecek
    // List Item Oluşturma
    const listItem = document.createElement("li");
    listItem.className ="list-group-item d-flex - justify-content-between";

    // Link Oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"
    
    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    
    // List Item'ın içine Link'i ekleme
    listItem.appendChild(link);

    // Todo List'e List Item'ı Ekleme
    todoList.appendChild(listItem);

    todoInput.value = null; //Formun içini ekledikten sonra temizleme işlemi
    
}
//  BILGILENDIRME MESAJLARI

function showAlert(type,message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`;
    alert.textContent = message
    firstCardBody.appendChild(alert);
    // setTimeout 1000=1 saniye demek
    
    setTimeout(function(){
        alert.remove();
    }, 1000)
    
}


// LOCAL STORAGE 

function getTodosFromStorage() { //Storage'dan Todoları Almak
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}

// Sayfalar yüklendiğinde todoları, Storage'dan alıp ekrana bastırma

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo) {
        addTodotoUI(todo)
    })    
}

// Todoları, Butonlara basarak Silmek

function deleteTodo(e) {
    
    if (e.target.className==="fa fa-remove") {
        
        e.target.parentElement.parentElement.remove();
        
        //Eğer burdan silersek yenileyince tekrar gelir, o yüzden storage'den silmeliyiz.
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success", "Todo Başarıyla Silindi.")
    }

}

// Todoları storage dan silme

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo, index) {
        if (todo === deletetodo) {
            todos.splice(index,1); // O indexten itibaren 1 değeri silicez
        }
    })

    localStorage.setItem("todos", JSON.stringify(todos));
        
    
}


// Todoları Filtrelemek

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    console.log(listItems)
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();    
        if (text.indexOf(filterValue) === -1) {
            // Bulamadı
            listItem.setAttribute("style","display : none !important");
        }    
        else {
            listItem.setAttribute("style","display:block");
        }
    });
    
};
    

// Tüm todoları temizleme

function clearAllTodos(_e) {
    // Arayüzden todoları temizlemek
    if (confirm("Tümünü silmek istediğinize emin misiniz ?")) {
        // todoList.innerHTML="" Yavaş bir yöntem olduğu için tercih edilmez
        
        while(todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        showAlert("success", "Todolarınız başarıyla silindi")
        localStorage.removeItem("todos");
    }
}