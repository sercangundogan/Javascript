// Async Functionlar sadece promise dönmelidir.
// async function test(data){
    // Promise return new Promise
    // return data;
    // let promise = new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         resolve("Bu bir değerdir.");
    //     }, 5000);
        
    // });

    // let response = await promise; // 5 saniye bekleyecek
    // await sadece async functionların içinde çalıştırılabilir.
    
    // return response; // Bu bir değerdir string ini döndük

// }

// console.log(test("Merhaba"));


// test("Merhaba")
// .then(response => console.log(response));




// "thriller" ı gönderiyoruz, promise objesi oluşturuyoruz
// 5 saniye bekledikten sonra değerimiz string ise 
// gönderdiğimiz thriller değerini resolve ediyoruz
// sonra response = thriller oluyor ve en son then ile elde ediyoruz.
// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject("Lütfen string bir değer girin.")
//             }
//         }, 5000)
//     })

//     const response = await promise;

//     return response
// }


// testData(24)
// .then(data => console.log(data))
// .catch(err => console.log(err))



async function getCurrency(url){

    const response = await fetch(url); // Response object 
    console.log(response)

    const data = await response.json(); // Json Object

    return data;
}


getCurrency("https://api.exchangeratesapi.io/latest")
.then(ahmet => console.log(ahmet)) // response olmasına gerek yok :)
