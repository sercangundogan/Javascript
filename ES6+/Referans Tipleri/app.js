// Referans Tipleri Tekrar ( Hatırlamakta fayda var)

// PRIMITIVE
// let a = "Mustafa";
// let b = "Mustafa";

// if(a === b){
//     console.log("Eşit");
// }


// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];


// if (array1 === array2) {
//     console.log("EŞit") //False çıktı? 
// } // Burada aslında arraylerin içine bakmadık, sadece bellekte aynı yeri gösteriyor mu diye baktık.



// const person1 = {
//     name: "Mustafa",
//     age:25
// }

// const person2 = {
//     name: "Mustafa",
//     age:25
// }

// if(person1 === person2){
//     console.log("Eşit") //Yine false çıktı.
// }


const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
console.log(cities.get("Ankara"));  // 5 Değerini aldık

cities.set([1,2,3],"Array");
console.log(cities.get([1,2,3])) // Undefined sonucunu aldık.