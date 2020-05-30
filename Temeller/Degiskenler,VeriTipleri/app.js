
// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a, b, c);


// JS'de 2 Tür veri tip vardır. Primitive ve Reference

// PRIMITIVE

// var a = 10; // Number Veri Tipi
// var b = 3.14; // Number Veri Tip
// console.log(a);
// console.log(typeof b);


// var name = "Mustafa" // String

// console.log(name);
// console.log(typeof name);


// var a = true; //Boolean
// var b = false;; //Boolean
// console.log(b);
// console.log(typeof a);


// var a = null; // Boş değer verilmiş

// console.log(a);

// console.log(typeof a)

// var a; // Değer verilmemiş


// console.log(a);

// REFERENCE

// var numbers = [1,2,3,4,5] // object

// console.log(numbers)
// console.log(typeof numbers)

// var person = {
//     name: "Sercan",
//     age : 25
// }

// console.log(person);
// console.log(typeof person)

// var date = new Date();

// console.log(date);

// console.log(typeof date);

// var merhaba = function(){
//     console.log(merhaba);
// }

// console.log(typeof merhaba)

// var a = 10;

// var b = a;

// console.log(a,b);

// a=20;

// console.log(a,b);

var a = [1,2,3];

var b = a;

a.push(4);

console.log(b);
