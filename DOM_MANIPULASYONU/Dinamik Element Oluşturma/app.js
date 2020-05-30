// En sonda bulunan butonun altına bir buton daha eklemeye çalışıcaz

// Yeni element oluşturma --> <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1]; // 2 Element Gelecek, 2.Sini alıcaz

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank"

// Text Content

// newLink.textContent = "Farklı sayfaya git"; // Bu yöntem hiç güvenli bir yöntem değildir.

// cardBody.textContent = "dğskoghdhgfdh"; Böyle yaparsan her şey gider mesela

// Text Node

// const text = document.createTextNode("Naber");
// cardBody.appendChild(text); //Append En sona ekleyen komuttur zaten ordan hatırlayabilirsin. Bu yöntem güvenli

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardBody.appendChild(newLink);

console.log(newLink)