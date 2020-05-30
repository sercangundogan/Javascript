//Dict Mantığı

let value;


const programmer = {
    name : "Mustafa Murat",
    age : 25,
    email : "coskun.m.murat@gmail.com",
    languages : ["Python","Java","Javascript"],
    adress : {
        city : "Ankara",
        street : "Bahçelievler",
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }
}

value = programmer;

value = programmer.email; //Genel olarak bu kullanılır veya
value = programmer["email"];

value = programmer.langs; //undefined

value = programmer.adress.city;

programmer.work();

const programmers = [
    {name: "Mustafa Murat", age:25},
    {name: "Oğuz" , age: 25}
];

value = programmers[0].name

console.log(value);
