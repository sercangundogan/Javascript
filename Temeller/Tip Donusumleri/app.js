let value;

// Veri Tiplerini String'e Çevirme
// Her tip stringe çevrilebilir.

// console.log(value);
// console.log(typeof value);

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);

value = (10).toString();
value = (3,14).toString();

// Veritiplerini Sayılara çevirme
value = Number("123");
value = (3.14).toString();
value = Number(undefined); //NAN sonucu alınır(Not a number)
value = Number(function(){console.log()});
value = Number ([1,2,3,4]);

value = Number("3.14");
value = parseFloat("3.14");

value =parseInt("3");


// Otomatik çevirme işlemleri

const a = "Hello" + 34
console.log(a)
console.log(typeof a)

// console.log(value)
// console.log(typeof value)
