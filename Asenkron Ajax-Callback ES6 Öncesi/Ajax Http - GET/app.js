// İnternette popüler olan JSONPlaceHolder apisi ile çalıştık.

// Ajax, callback, http requests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //GET Request

    get(url, callback){
        this.xhr.open("GET",url); // Bağlantı Açık
        const temp = this; // İlkel bir yöntemdir
                        
        // console.log(this) --> this burda xhr'ın kendisini gösteriyor.
        this.xhr.onload = function(){
            if (temp.xhr.status === 200) {
                // console.log(this.xhr.responseText); Undefined geldi hata verdi.
                // console.log(temp.xhr.responseText); İlkel Töntem

            }
            // Veya
            if(this.status === 200) {
                callback(null,this.responseText); // İsteğimiz bitti
            }

            // Veya fonksiyon sonuna .bind(this); eklersek this request objesini gösterir.
            
            // Veya Kendi ilk fonksiyonumuzu(temp yazan) direk arrow function olarak yazabiliriz.

            else {
               //Hata Durumuna
               callback("Herhangi bir hata oluştu", null);

            }
        }
        this.xhr.send();
        
        
    }
}

const request = new Request();

// const albums = request.get("https://jsonplaceholder.typicode.com/albums")

// console.log(albums); // Önce undefined geldi sonra yazdırdı.

// request.get'e bir de function göndeririz.
const albums = request.get("https://jsonplaceholder.typicode.com/albums/51", function(err, response){
    if (err === null){
        // Başarılı
        console.log(response);
    }
    else {
        console.log(err);
    }
})

