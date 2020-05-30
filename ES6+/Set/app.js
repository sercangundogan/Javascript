// Setler - Kümeler

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Mustafa");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});
// console.log(mySet);

const mySet2 = new Set([100,3.14,"Mustafa"]);
// console.log(mySet2);

// Size
// console.log(mySet.size);



//Delete
// mySet.delete("Mustafa");
// console.log(mySet);

//Has
// console.log(mySet.has(3.14));
// console.log(mySet.has("Mustafa"));
// console.log(mySet.has(2000));
// console.log(mySet.has([1,2,3]));  // False Döner


// For Each
// mySet.forEach(function(value){
//     console.log(value);
// })


// For Of
// for(let value of mySet){
//     console.log(value);
// }


// Setlerden Array Oluşturmak
// const array = Array.from(mySet);
// console.log(array);

