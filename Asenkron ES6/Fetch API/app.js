// Ajax'ın yerine veri almak veya göndermek için kullanılabilir.
// Daha yeni ve Daha Kolay
// FETCH > AJAX --> NERDEYSE HİÇ AJAX KULLANMAYACAĞIZ GEREK KALMAYACAK


// TEXT Dosyasından Veri Almak (LOCAL)
// function getTextFile(){

//     fetch("example.txt")
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(err =>
//  console.log(err))
// }

// getTextFile();





//JSON Dosyasından Veri Almak (LOCAL)
// function getJsonFile(){

//     fetch("example.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// getJsonFile();




//JSON VERİ - APİDEN ALMAK
function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY)) // 1 Euro'nun karşılığı
    .catch(err => console.error(err))
}

getExternalAPI();

