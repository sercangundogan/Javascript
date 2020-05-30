// Scope Kavramı

// // 1-Global Scope

// funtion a(){
//     // 2-Function Scope
// }

// if() {
//     // 3-Block Scope
// }

// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// hiçbiri dışarda var olmaz, fonksiyon içindeki fonksiyon içinde kalır
// function Func() {
//     var value1 = 40;
//     let value2 = 50;            
//     const value3 = 60;

//     console.log(value1, value2, value3);
// }


// console.log(value1,value2,value3)

// Func();


// Blok içindeki var değişkenleri dışarda da var oluyorlar
// Fakat let ve const değişkenleri dışarda var olmuyorlar

// if (true) {
//     var a= 10;
//     let b=20;
//     const c =30;
// }

// console.log(a);
// console.log(b);
// console.log(c);


// Let ve cons farklı çıktı fakat var 10du sonra 40oldu yazıldı sonra yazıldığında hala 40'tı
// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// if (true) {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1,value2,value3)
// }

// console.log(value1,value2,value3)


