// // Kalıtım - Inheritance --> Yorumlardan itibaren aynısını yazacağız.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// // Person adında bir fonksiyon oluşturduk.

// // Person'un prototype'ına bir tane showInfos adında bir fonksiyon oluşturduk.
// Person.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + ", Yaş: " + this.age);
    
// }

// //Şimdi person'u Person objesinden oluşturuyoruz.
// const person = new Person("Mustafa", 25);
// // console.log(person);


// // Employee adında yeni bir obje oluşturduk.
// function Employee(name,age,salary){
//     // this.name = name;
//     // this.age = age;
//     Person.call(this, name, age);
//     this.salary = salary;
// }



// // Employee nin prototype ını, Object'in prototype'ına eşitledik.
// // Bu sayede Employee'de, Person'daki showınfos fonksiyonunu kullanabiliriz.
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function() {
//     console.log("Employee");
// }
// // Employee < Employee.prototype(toString) < Person < Object


// // Overriding - İptal Etme
// Employee.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + ", Yaş: " + this.age + ", Maaş: " + this.salary)
// }
// const emp = new Employee("Mustafa", 25, 3000);



// // console.log(emp);

// emp.showInfos();
// emp.toString();

// console.log(emp);


class Person { // SuperClass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + ", Yaş: " + this.age);
    }
}

class Employee extends Person { // SubClass, DerivedClass, ChildClass
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age); // constructor ı kullandık
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim: " + this.name + ", Yaş: " + this.age + ", Maaş: " + this.salary);
    }
    toString(){
        console.log("Employee");
    }
    raiseSalary(amount) {
        this.salary += amount
    }
}

const emp = new Employee("Mustafa", 25, 4000);

// console.log(emp);
emp.raiseSalary(300);
emp.showInfos();
emp.toString();