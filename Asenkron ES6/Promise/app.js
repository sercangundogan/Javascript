// function getData(data) { // Promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             // resolve("Olumlu Sonuç"); 1.KISIM
//             // reject("Olumsuz sonuç"); Hatamızı yakalamadık, program hata verdi.
//             // resolve("Olumlu Sonuç");
//             // reject("Olumsuz Sonuç") // Fonksiyonu Çağırırken Hatayı yakaladık.
//             // VEYA
//             if(typeof data === "string"){
//                 // Oumlu
//                 resolve(data);
//             }
//             else {
//                 // Olumsuz
//                 reject(new Error("Lütfen string bir değer giriniz."));
//             }
//         }, 5000)
//     });
// }



// console.log(getData("Merhaba"));  1.KI

// 1- OLUMLU SONUCU ALMAK
// getData("Merhaba").then(function(response){
//     // Response şuanda  = "Olumlu Sonuç" -- > Callback fonksiyon mantığı
//     console.log(response);
// })


//  2- HATA YAKALAMAK
// getData("Merhaba").catch(function(err){
//     console.log(err);
// })


//THEN VE CATCH'i BIRBIRINE BAGLAMAK --> ONEMLI
// getData(5).then(function(response){
//     console.log("Gelen Değer: " + response);
// }).catch(function(err){
//     console.error(err);
// })

// DAHA GUZEL YAZMAK - Arrow Function
// getData(25)
// .then(response => console.log("Gelen Değer: " + response))
// .catch(err => console.error(err));


// YENI ORNEK - BIRDEN FAZLA THEN DONMEK

function addTwo(number){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if (typeof number === "number"){
                resolve(number + 2);
            }
            else {
                reject(new Error("Lütfen bir sayı girin"));
            }
        }, 3000)
    });
}


// PROMISE CHAIN 
// Önce 12 değerini sonrasında da 14 değerini verdi
addTwo("Merhaba")
.then(response => {
    console.log(response);
    return response + 2 ;
}).then(response2 => console.log(response2))
.catch(err => console.log(err));
// BIRDEN FAZLA THEN KULLANABILIRIZ.
// BIRDEN FAZLA HATA DONULEMEZ!!!!


