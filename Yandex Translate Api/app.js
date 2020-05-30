// Genel Dosya
// Prototype, Ajax, Callback Kullanımı Olucak.

//  Diğer dosyalardaki fonksiyonları burada kullanacağız.
//  O yüzden html dosyasında, en altta bu olması gerekir
//  Diğerlerinin nerde olduğu çok önemli değil



eventListeners();


function eventListeners(){
    document.querySelector("#translate-form").addEventListener("submit", translateWord);
    // Change
    document.getElementById("language").onchange = function(){
        // Arayüz İşlemleri
        ui.changeUI();
    }
}

const translate =new Translate(document.querySelector("#word").value, document.getElementById("language").value)
const ui = new UI();

function translateWord(e){
    
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);

    translate.translateWord(function(err,response){
        if (err){
            //Hata
            console.log(err);
        }
        else{
            ui.displayTranslate(response);
        }

    });
    
    



    e.preventDefault();
}