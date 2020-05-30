const element = document.querySelector("#clear-todos");

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);

// console.log(element.textContent);
// console.log(element.innerHTML);

// console.log(element.href);
// console.log(element.style);


// STYLE ELEMENT OZELLIKLERINI DEGISTIRME

// element.className = "btn btn-primary";
// element.style.color = "red";
// element.style.marginLeft = "35px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";

// console.log(element.textContent);
// element.textContent = "Silin";
// element.textContent = "<span>Silin</span>"; //Bu normal yazı gibi gözükür.
// element.innerHTML = "<span style = 'color:green'>Silin</span>";


// const elements = document.querySelectorAll(".list-group-item"); //Node List gönderir

// elements.forEach(function(el){
//     el.style.color="red";
//     el.style.background = "#eee";
// });

// console.log(elements);

let element2 = document.querySelector("li:first-child");

element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd"); //Tekleri seçicek
element2 = document.querySelectorAll("li:nth-child(even"); // Çiftleri seçer


element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "red";
})


console.log(element2)