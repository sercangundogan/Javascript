// Karşılaştırma Operatörleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

// console.log(2 == 2);
// console.log("js" == "java");
// console.log(2 == "2") // 2'sini de stringe çevirir o yüzden type larını da kontrol etmek gerekir.

// console.log(2==2);
// console.log(2 === "2"); // 3 Eşittir type ı ve değeri kontrol etmeye yarıyor

// console.log(4 > 2);

// console.log(2>4);

// console.log(2 != 4);

// console.log(2 < 4);
// console.log(4<2);

// console.log(4 >=2 );
// console.log(4 >= 4);

// console.log(2 <= 4);
// console.log(2 <= 2);

// Mantıksal Bağlaçlar

// Not Operatörü --> ! 

// console.log(!(2 != 2))

// And Operatörü --> &&
// True olması için hepsi true olmalı


// console.log(2 == 2) && ("Ahmet" == "Ahmet"); True
// console.log(4 == 2) && ("Ahmet" == "Ahmet"); False


//  Or Operatörü --> || Biri true ise true

// console.log((4 == 2) || ("Ahmet" == "Ahmet") );

// IF Kosulu

// const error = false;

// if (error == true) {
//     console.log("Hata oluştu");
// }
// else {
//     console.log("Hata oluşmadı")
// }

// const user = "ttt";

// if (user === "mmc") {
//     console.log("Kullanıcı bulundu");
// }
// else {
//     console.log("Kullanıcı bulunamadı")
// }

// const process = "3";

// if (process === "1") {
//     console.log("İşlem 1");
// }
// else if (process === "2") {
//     console.log("İşlem 2");
// }
// else if (process === "3") {
//     console.log("İşlem 3");
// }
// else if (process === "4") {
//     console.log("İşlem 4");
// }
// else {
//     console.log("Geçersiz İşlem");
// }

// const number = 120;

// if (number === 100) {
//     console.log("Sayı 100'e eşit");
// }
// else {
//     console.log("Sayı 100'e eşit değil");
// }

// TERNARY OPERATOR

// const number = 1005
// console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil");

// Eğer tek bir koşul varsa yanına yazabilirsin. Örneğin;


const number = 100
if ( number === 100) console.log("Sayı 100");
else console.log("Sayı 100 değil");