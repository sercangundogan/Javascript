// module.exports.test1 = function test1(){
//     console.log("Test 1");
// }

// module.exports.test2 = function test2(){
//     console.log("Test 2")
// } 


// veya

// module.exports = {
//     name: "Mustafa",
//     test1: function(){
//         console.log("Test1")
//     },
//     person : {
//         name: "Mustafa",
//         mail: "coskun.m.murat@gmail.com"
//     }
// }

// veya

export const name = "Mustafa";
export function test(){
    console.log("Test Fonksiyonu")
}

export class Person {
    static Test(){
        console.log("Person Test");
    }
}

export const employee = {
    name: "Mustafa",
    salary: 4000
}

// Default olarak alabiliyoruz
export default class Deneme {
    static deneme(){
        console.log("Default Deneme");
    }
}

//  veya

const denemeVal = "Deneme Değeri";

export default denemeVal