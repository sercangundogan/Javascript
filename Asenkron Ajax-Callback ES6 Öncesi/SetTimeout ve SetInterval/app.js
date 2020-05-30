// Set Timeout

// setTimeout(function(){
//     console.log("Naber");
// }, 2000) // 2 Saniye sonra Naber Yazar


// Set Interval -Tekrar tekrar Çalıştırır. Saniye aradaki süreyi ifade eder.
let i = 0
let value = setInterval(function(){
    i++;
    console.log("Sayı: ", i)
}, 1000); // 1 saniye aralıklarla, tekrar tekrar çalıştırır
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value); // clearInterval, setInterval'ı durdurmaya yarar.
});
