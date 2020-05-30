// Fonksiyon Tanımlama

function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){
    console.log(`İsim: ${name}, Yaş:${age}`);
}

merhaba("Sercan"); //Function Call

function square(x) {
    return x*x;
}

function cube(x) {
    return x*x*x;
}

let a = square(2);

console.log(a);

a = cube(a);

console.log(a);

//Function Expression

const merhaba2 = function() {
    console.log("Merhaba");
}

merhaba2();

// Immediately Invoked Function Expression (IIFE)

(function(name){
    console.log("Merhaba: " + name);
})("Murat");


const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`ID: ${id} Güncellendi`);
    },
    delete:function(id) {
        console.log(`Id: ${id} Güncellendi`);
    }
}

console.log(database.host);

database.delete(10);