// Element ID'e Göre Seçme

let element;

element=document.getElementById("todo-form");
element = document.getElementById("tasks-title")

// Element Class'a Göre Seçme


element = document.getElementsByClassName("justify-content-between");

element = document.getElementsByClassName("justify-content-between")[0];
element = document.getElementsByClassName("card-header");

// Element Tag'e Göre Seçme

element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");


// Query Selector - Css Selector - Tek bir Element Döner

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item"); // Class'ı bu olan ilk element gelir, normalde 4 tane var.

element = document.querySelector("li"); //İlk li'yi seçer

element =document.querySelector("div"); //İlk Div

// QuerySelectorAll - Birden fazla element seçme

element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){  //Array döndüğü için bu yöntemle içinde gezinebiliyoruz
    console.log(el)
})

// console.log(element);