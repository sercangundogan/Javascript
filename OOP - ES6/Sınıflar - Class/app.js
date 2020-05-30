// EcmaScript6(ES6) ile gelen özellik. 
// Prototype ların yazımını güzelleştiriyor


// Önceden bu şekildeydi.

// function Employee(name, age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: ");
// }

// const emp = new Employee("Mustafa",25,4000);

// console.log(emp)



// Yenisi artık böyle

class Employee{
    
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
        

    }
    showInfos(){
        console.log("İsim: " + this.name + ", Yaş: " + this.age + ", Maaş: " + this.salary);
    }
}

const emp = new Employee("Mustafa",25,4000);

// console.log(emp);

emp.showInfos();