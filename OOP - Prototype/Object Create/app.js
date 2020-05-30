// // Object.Create Metodu
// Object.create() methodu ile kendi yarattığımız objeyi prototip olarak kullanabiliriz. Aynı zamanda başka bir fonksiyonun prototipini  yarattığımız başka bir yapıcı fonksiyonda kullanabiliriz.




// const obj = {
//     test1: function() {
//         console.log("Tesst 1");
//     },
//     test2: function(){
//         console.log("Test 2");
//     }

// }

// // console.log(obj);

// const emp = Object.create(obj);
// // obj'nin şuanda prototype Objecti Gösteriyor
// // emp'nin ise prototype'ı obj'yi gösteriyor


// emp.name = "Mustafa";
// emp.age = 25;

// console.log(emp)


function Person(){
    
}

Person.prototype.test1 = function() {
    console.log("Test 1");
}

Person.prototype.test2 = function() {
    console.log("Test 2");
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("MyTest");
}
const emp = new Employee("Mustafa",25);

// emp.test1();
console.log(emp);