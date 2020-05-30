// Klavye Eventleri

// keypress

// document.addEventListener("keypress",run);

// function run(e) {

//     // console.log(e.which);
//     // console.log(e.key);
    
// }





// keydown -> Tuşa basılı tuttuğunda triggerlanır

// document.addEventListener("keydown",run);

// function run(e) {
//     console.log(e.key);
// }

// keyup --> Tuşu sadece bıraktığında trigger

// document.addEventListener("keyup",run);

// function run(e) {
//     console.log(e.key);
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
    
    header.textContent = e.target.value;
    console.log(e.target.value);
}