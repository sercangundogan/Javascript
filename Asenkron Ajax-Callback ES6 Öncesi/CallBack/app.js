// Önceden kullanılırdı artık çok fazla kullanılmaz.

// Callback Fonksiyonlar


// const langs = ["Python", "JAva", "C++"];

// langs.forEach(function(lang){
//     console.log(lang);
// })

// function process1(){
//     setTimeout(function(){
//         console.log("Process 1")
//     },3000)
// }
// function process2(){
//     console.log("Process 2");
// }

// Burada Asenkron bir durum elde Ederiz.
// Önce process 2 çalışır, Process 1'i beklemez.
// Sonrasında Process 1, PRocess2 ten 3 saniye sonra çalışır.
// process1();
// process2();

// function process1(){
//     setTimeout(function(){
//         console.log("Process 1")
//     },3000)
// }
// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000)
// }



// Asenkron durum
// Burada da önce Naber Gelir
// Sonrasında 2 saniye sonra Process 2 çalışır
// Process 2'den 1 saniye sonra Process 1 çalışır.


// process1();
// process2();
// console.log("Naber");

// function process1(callback){
//     setTimeout(function(){
//         console.log("Process 1");
//         callback();
//     },3000)
// }
// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     },2000)
// }

// Fonksiyona callback ekleyerek asenkron durumdan kurtulabiliriz.
// Mesela bir yerden veri gelince çalışmasını istiyorsak o zaman callback kullanırız.
// process1(process2);





// const langs = ["Python","Java","C++"];7

// function addLang(lang){

//     setTimeout(function(){
//         langs.push(lang);
//         console.log("Eklendi");
//     }, 2000)
// }

// function getAllLangs(){
//     setTimeout(function(){
//         langs.forEach(function(lang){
//             console.log(lang);
//         })
//     }, 1000)
// }

// // Asenkron Durum oldu.
// addLang("Javascript")
// getAllLangs();


const langs = ["Python","Java","C++"];7

function addLang(lang, callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    }, 2000)
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        })
    }, 1000)
}

// Asenkron Durumdan kurtulduk.
addLang("Javascript", getAllLangs);
