// Destructing

// let number1, number2;
// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];
// console.log(number1, number2);

// VEYA Destructing Yapabiliriz

// [number1, number2] = arr;
// console.log(number1, number2);


// const [number1, number2] = arr;
// console.log(number1, number2);


//  Obje Destructing

const numbers = {
    a:20,
    b:20,
    c:30,
    d:40,
    e:50,

};

// const {number1,number2,number3} = numbers
// console.log(number1,number2,number3) //Undefined geldi


// const {a,c,e} = numbers;
// console.log(a,c,e); //a,c,e nin değerini elde ettik


// const{a:number1, c:number2, e:number3} = numbers;
// console.log(number1,number2,number3);


// Function Destructing

// const getLangs = () => ["Python", "Java", "C++"];
// const [lang1, lang2, lang3] = getLangs();
// console.log(lang1,lang2,lang3);


// Obje

const person = {
    name : "Mustafa Murat",
    year : 1993,
    salary : 3000,
    showInfos : () => console.log("Bilgiler Gösteriliyor..")
}

const {name:isim, year:yıl, salary:maas, showInfos:bilgileriGoster} = person;

console.log(isim,yıl,maas);
bilgileriGoster();