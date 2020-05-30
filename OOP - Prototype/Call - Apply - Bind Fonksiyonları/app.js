const obj1 = {
    number1:30,
    number2:40
};
const obj2 = {
    number1:90,
    number2:20
};

function addNumbers(number3, number4){

    console.log(this.number1 + this.number2 + number3 + number4)
}

// addNumbers(100, 200); // NAN döndü

// Call
// addNumbers.call(obj1,100,200); // obj1'e göre çalıştırdık.this artık obj1 i gösterir
// addNumbers.call(obj2,100,200);


// Apply
// addNumbers.apply(obj1, [100,200]); // Parametleri argüman olarak verdik
// Call ve Apply arasındaki tek fark budur.,


// Bind

function getNumbersTotal(number3, number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);

console.dir(copyFunc1)

console.log(copyFunc1(100,200))
console.log(copyFunc2(100,200))