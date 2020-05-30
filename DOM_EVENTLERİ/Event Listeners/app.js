const filterInput = document.querySelector("#filter");
const todoForm = document.querySelector("#todo-form");

// filterInput.onfocus = function() {
//     console.log("Naber");
// }


// filterInput.addEventListener("focus", function(e){
    
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// })

todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
    console.log("Submit Eventi");



    e.preventDefault(); //İşlemlerin en altında yapılır. Formun sayfayı yeniden yenelemesini engeller.
    
}