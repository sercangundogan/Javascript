// Http Status
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready


document.querySelector("#btn").addEventListener("click",function(){

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    // Eski bir yöntemdir.
    // xhr.onreadystatechange = function(){
        
    //     // console.log(this.readyState);
    //     // console.log(this.status);
    //     if(this.status == 200 && this.readyState == 4){// 4: request finished and response is ready
    //         console.log(this.responseText)
    //     } 
    // }

    // Sadece Response hazır olduğunda yani Ready State = 4 olduğunda gerçekleşir.
    xhr.onload = function(){
        // console.log(this.readyState)
        if(this.status == 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    // Sadece Ready State = 3 olduğunda yani on Progress durumunda olduğunda çalışır.
    // xhr.onprogress = function(){
    //     console.log("Process İşleniyor..", this.readyState);
    // }

    xhr.open("GET","example.txt",true)

    xhr.send();
    
})