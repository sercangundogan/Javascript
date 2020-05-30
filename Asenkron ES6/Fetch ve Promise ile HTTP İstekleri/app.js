class Request {
    get(url){ // Get Request
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response => response.text())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
        
        
    }
    post(url, data){ // Post Request
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    put(url, data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        })
    }

    delete(url){

        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
            }).then(response => resolve("Veri Silme İşlemi başarılı."))
            .catch(err => reject(err));

        })

    }

        
    
}


const request =new Request();




// GET REQUEST

// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
//     console.log(albums)
// })
// .catch(err => console.log(err));
// console.log(albums); // Asenkron



// POST REQUEST

// request.post("https://jsonplaceholder.typicode.com/albums",{userID:1, title:"Thriller"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));



// PUT REQUEST 
// request.put("https://jsonplaceholder.typicode.com/posts/1",{userId:10, title: "Tarkan Karma"})
// .then(album => bonsole.log(album))
// .catch(err => console.log(err));



// DELETE REQUEST

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err));
