// WEBPACK KULLANIMI
// import {Person} from "./app1";
// import {Employee} from "./app2";

// Person.Test();
// Employee.Test();
// console.log("Dosya Değişti")




// REQUIRE - MODULE
// CommonJs Modülleri


// module1'i index dosyasına dahil etmek
// const app = require("./module1");


// console.log(app.name);
// app.test1();
// console.log(app.person.name);

// ES6 MODULES
// import {test,Person} from "./module1";
// Person.Test();
// test()

// Veya
import * as module1 from "./module1";


module1.Person.Test();
module1.test();

// import denemeVal from "./module1";
// console.log(denemeVal);