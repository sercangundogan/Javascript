const filter = document.querySelector("#filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e) {
//     console.log("Sayfa Yüklendi");
// }

// Focus - Blur

// filter.addEventListener("focus", run);
// filter.addEventListener("blur", run); //Focus'un tersi

// Paste --> Focuslanıp bir şey yapıştırırsan trigger
// filter.addEventListener("paste", run);

// Copy  --> Focuslanıp kopyalama yaparsan veya ctrl+c trigger
// filter.addEventListener("copy", run);

// Cut --> Copy'nin aynısı, kesince çalışır
// filter.addEventListener("cut", run);

// Select --> Fareyle seçip bırakınca çalışır
filter.addEventListener("select",run);




function run(e) {
    console.log(e.type);
}