let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java, Python, C++";

value = firstName + lastName;

value = firstName + " " + lastName;


value = "Mustafa Murat ";

// value = value + "Coşkun" yerine 
value += "Coşkun"

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Caz") // firstName + " "

value = firstName.toLowerCase();

value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length - 1] // Son elemanı almak için güzel bir yöntem

// index of --> Karakterin indexini söyler

value = firstName.indexOf("L");
value = firstName.indexOf("o");

value = firstName.indexOf("l"); // -1 Sonucu döndü çünkü böyle bir karakter arrayde yok.

// Char At
value = firstName.charAt(0); //Aynı şekilde elemanı almamızı sağlar
value = firstName.charAt(firstName.length -1)


// Split

value = langs.split(",")


//Replace
value = langs.replace("Python" , "CSS");

//Includes
value = langs.includes("Java"); //İçinde varsa true yoksa false
value = langs.includes("C#");





console.log(value)