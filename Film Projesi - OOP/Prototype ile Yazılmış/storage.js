function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm); // Fonksiyondan dönen film array'ine yeni filmi eklemek;
    /*
    [
        {title:"sdhıgsdg", director:"djgfdkgdf", url: "posdjgkglf"},
        {title:"sdhıgsdg", director:"djgfdkgdf", url: "posdjgkglf"}
    ]
     */

    localStorage.setItem("films", JSON.stringify(films));
}


// Filmleri alan function
Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null) {
        films = []
    } 
    else{
        films = JSON.parse(localStorage.getItem("films"));
        
    }
    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();

    films.forEach(function(film, index){
        console.log(film.title)
        console.log(filmTitle)
        if(film.title === filmTitle){
            // Splice (index, kaç tane silinecek )
            films.splice(index,1);
        }
    });
    
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
};  