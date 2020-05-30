let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

// Child Nodes

value = todoList.childNodes; //4 yerine 9 uzunluk geldi çünkü aradaki satırları da saydı
value = todoList.childNodes[0];

// Children --> Boş satırlardan kurtulmak için

value = todoList.children;
value = todoList.children[0];
value = todoList.children[todoList.children.length-1];

value = todoList.children[2].textContent ="Değişti";



value = cardrow
value = cardrow.children;
value = cardrow.children[2].children;
value = cardrow.children[2].children[1].textContent = "Burası da değişti"

value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

// Element Kardeşleri

value = todo;

value = todo.previousElementSibling; // Todo2 den Todo1 e gittik.
value = todo.nextElementSibling; //Bir sonraki kardeşe gittik.
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling; // Önce ilk 2'den 1'e sonra 1'den olmayan bir elemente gittik ve null değeri döndü
console.log(value);