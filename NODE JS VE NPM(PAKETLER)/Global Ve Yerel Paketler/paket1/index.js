// cd paket1
// node index.js
//  npm install simple-is
// Bu komuttan sonra bu "simple-is" paketi sadece paket1 klasörüne kurulmuş oldu

console.log("Paket 1")

const is = require("simple-is");

console.log(is.number(24));