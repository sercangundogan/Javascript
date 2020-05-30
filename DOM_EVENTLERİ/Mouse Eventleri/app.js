const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

console.log(title)
console.log(cardBody)

// Click Event
// title.addEventListener("click",run);

// Double Click
// title.addEventListener("dblclick",run);

// Mouse Down --> Key Down a beznzer
// title.addEventListener("mousedown",run);

// Mouse Up --> Keyup a oldukça benzer
// title.addEventListener("mouseup",run);

// Mouse Over --> Element geldiğimizde olur, tıklamaya gerek yok
// title.addEventListener("mouseover",run)

// Mouse Out --> Elementin üzerine gelip çıktığımızda olur, tıklamaya gerek yok
// title.addEventListener("mouseout",run)

// cardBody'nin altındaki bütün etiketlere girildiğinde trigger
// cardBody.addEventListener("mouseover", run);

// Mouse Enter ve Mouse Leave --> Etiketlerin içine girdiğinde veya çıktığında değil, direk alana girip alandan çıktığında trigger 
cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave",run);





function run(e) {
    console.log(e.type);
}