 // Maps - Key(Anahtar) - Value (Değer) --> Python'daki Dictionary Mantığı

//  let myMap = new Map(); //Map olşturma

//  console.log(myMap);

//  const key1 = "Mustafa";
//  const key2 = {a: 10, b: 20};
//  const key3 = () => 2;

// Set
// myMap.set(key1, "String Değer");
// myMap.set(key2, "Object Literal Değer")
// myMap.set(key3, "Function Değer")

//GET

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

//Map Boyutu

// console.log(myMap.size);

// YENİ ÖRNEK

// const cities = new Map();

// cities.set("Ankara", 5);
// cities.set("İstanbul", 15);
// cities.set("İzmir", 4);

//For Each

// cities.forEach(function(value , key) {
//     console.log(key,value);
// })


// For Of

// for(let [key,value] of cities) {
//     console.log(key,value);
// }

//Map Keys

// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Values

// for(let value of cities.values()){
//     console.log(value);
// }


// Arrayden Map Oluşturmak

// const array = [["key1","value2"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);


// Maplerden Array Oluşturmak


const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

const array = Array.from(cities);
// [ ["Ankara",5], ["İstanbul",15], ["İzmir",4]]
console.log(array)