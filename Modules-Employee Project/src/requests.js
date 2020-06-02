// Class'ımızı yazarken, index.js'de dahil edeceğimiz için başına export yazdık.
export class Request{
    constructor(url){
        this.url = url;
    }
    // Get Request ( async function )
    async get(){
        // Get request atıp response'u çektik
        const response = await fetch(this.url)
        // Response içindeki datayı json olarak aldık
        const responseData = await response.json();
        
        // responseData'yı dönüyoruz
        return responseData;
    }

    // Post Request
    async post(data){
        const response = await fetch(this.url,{
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        // Verimiz oluştuktan sonra onu alıp responseDataya atıyoruz.
        const responseData = await response.json();

        return responseData;
        
    }
    
    // Put Request
    async put(id, data){
        const response = await fetch(this.url +"/" + id,{
            method : "PUT",
            body : JSON.stringify(data),
            headers : {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        // Verimiz oluştuktan sonra onu alıp responseDataya atıyoruz.
        const responseData = await response.json();

        return responseData;
    }


    // Delete Request
    async delete(id){
        const response = await fetch(this.url + "/" + id,{
            method : "DELETE"
        })
        // Verimiz oluştuktan sonra String Değer dönüyoruz.
        return "Veri silindi";
    }

}