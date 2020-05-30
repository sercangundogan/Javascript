// Önemli bir konudur. 
// C#, Java veya Python gibi dillerde Class yapısı vardır 
// Ancak Javascript'te class diye belirtilse de arka planda prototype.

// const object = new Object(); //Object Literal
// object.name = "Musatafa";

// Her objenin, bir tane prototype adında farklı bir objesi bulunur.

// console.log(object);

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;

// }

// const emp1 = new Employee("Mustafa", 25);
// console.log(emp1)

// Prototype'ın içinde aynı zamanda, temel olan Object Prototype'ı vardır. --> Prototype Chain

// console.log(emp1.toString()); // Mesela burdaki toString fonksiyonu yazılmadığı halde kullabılabiliyor. 
// Yani her objemiz, Object'ten miras alıyoruz.

// console.log(emp1.deneme()); Mesela deneme olmadığı için hata verir.

// Eğer fonksiyona toString diye bir function koyarsak, bu sefer de alt taraftaki prototype'a bakmaz
// Direk en baştaki yazdığımız fonksiyonu kullanır.

// Aşağıya doğru giderek bakar, Object temele doğru

function Employee(name, age) {
    this.name = name;
    this.age = age;


}
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + ", Yaş: " + this.age);
}


const emp1 = new Employee("Mustafa", 25);
const emp2 = new Employee("Ahmet", 25);

emp2.showInfos();
console.log(emp1);
console.log(emp2);



