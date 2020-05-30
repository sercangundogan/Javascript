// const process = "3";

// if (process === "1") {
//     console.log("İşlem 1");
// }
// else if (process === "2") {
//     console.log("İşlem 2");
// }
// else if (process === "3") {
//     console.log("İşlem 3");
// }
// else if (process === "4") {
//     console.log("İşlem 4");
// }
// else {
//     console.log("Geçersiz İşlem");
// }

// Yukarıdaki kodun yerine kullanılır

const process = 3;

switch(process){
    case 1:
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    case 4:
        console.log("işlem 4");
        break;
    default:
        console.log("Geçersiz İşlem");
}

