// İnternette popüler olan JSONPlaceHolder apisi ile çalıştık.

// Ajax, callback, http requests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //GET Request

    get(url,callback){
        this.xhr.open("GET", url);
        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Get Request: Bir Hata Oluştu.")
            }
        };

        this.xhr.send()
    }

    // POST

    post(url, data, callback){
        this.xhr.open("POST", url)
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON Verisi

        this.xhr.onload = () => {
            // Burada 200 yerine 201 i kullanmamız gerekir. Eğer dosya başarıyla yaratılırsa bunu alırız.
            if(this.xhr.status === 201) {
                // Başarılı
                callback(null, this.xhr.responseText);
            }
            else{
                callback("Herhangi bir hata oluştu", null);
            }
        }
       this.xhr.send(JSON.stringify(data));
    }

    // PUT

    put(url, data, callback){
        this.xhr.open("PUT", url)
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON Verisi

        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                // Başarılı
                callback(null, this.xhr.responseText);
            }
            else{
                callback("Put request: Herhangi bir hata oluştu", null);
            }
        }
       this.xhr.send(JSON.stringify(data));
    }

    
    // DELETE
    delete(url,callback){
        this.xhr.open("DELETE", url);
        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                callback(null, "Veri Silme İşlemi Başarılı");
            }
            else {
                callback("Delete Request: Bir Hata Oluştu.")
            }
        };

        this.xhr.send();
    }


}

const request = new Request();

// GET

// // const albums = request.get("https://jsonplaceholder.typicode.com/albums")

// // console.log(albums); // Önce undefined geldi sonra yazdırdı.

// // request.get'e bir de function göndeririz.
const albums = request.get("https://jsonplaceholder.typicode.com/albums", function(err, response){
    if (err === null){
        // Başarılı
        console.log(response);
    }
    else {
        console.log(err);
    }
})


//POST

// request.post("https://jsonplaceholder.typicode.com/albums", {userId: 2, title:"Thriller"}, function(err, response){
//     if (err === null){
//         console.log(response);
//     }
//     else{
//         // Hata
//         console.log(err)
//     }
// })



//PUT

// request.post("https://jsonplaceholder.typicode.com/albums", {userId:143, title:"Tarkan Karma"}, function(err, response){
//     if (err === null){
//         console.log(response);
//     }
//     else{
//         // Hata
//         console.log(err)
//     }
// })



//DELETE
// request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err, response){
//     if (err === null){
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }

// });

