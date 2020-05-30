const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");
// UI Objesini Başlatma
const ui = new UI();

// Storage Objesi Üret
const storage = new Storage();
// Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title ==="" || director === "" || url === ""){
        // Hata
        ui.displayMessages("Tüm Alanları Doldurun..", "danger");
    }
    else {
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm) // Arayüze Film Ekleme
        storage.addFilmToStorage(newFilm); //Storage'a film ekleme
    }
    ui.clearInputs(titleElement,urlElement,directorElement);

    
    

    e.preventDefault();
}

function deleteFilm(e){
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        
        ui.displayMessages("Silme işlemi başarılı..","success")
    }
}

function clearAllFilms(){
    if (confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessages("Tüm filmler temizlendi","success")
    }
    
}