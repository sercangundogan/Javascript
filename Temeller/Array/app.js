let value;

const numbers = [43,56,33,23,44,35,5]

// const numbers2 = new Array(1,2,3,4,5,6,7) //Diğer bir array oluşturma yöntemi fakat çok kullanılmaz.
 

const langs = ["Python","Java","C++","Javascript"];

const a =["Merhaba",22,null,undefined,3,14];


//Uzunluk
value = numbers.length;

// İndeksleme
value = numbers[0];
value = numbers[2];
value = numbers[6] // veya
value = numbers[numbers.length - 1]

//Herhangi bir indeksteki değeri değiştirme

numbers[2] = 1000;

value = numbers;

// Index of

balue = numbers.indexOf(1000); //1000 değerinin indeksi

//Arrayin Sonuna Değer Ekleme --> push()

numbers.push(2000);

value = numbers;

// Başa Ekleme --> unshift()

numbers.unshift(3000); 

value = numbers;


// Sonundan Değer Atma --> pop()

numbers.pop(2000);

value = numbers;

// Başından Değer Atma --> shift()
numbers.shift();

value = numbers;

// Belli bir indeksten diğer indekse kadar atma
// --> splice()

numbers.splice(0,3); //0'dan 3'e kadar olan indeksleri atma

value = numbers;

// Arrayi tam tersine çevirme --> reverse()

numbers.reverse();

value = numbers;

// Sıralama --> sort() fakat sadece ilk rakama bakar
// Yani sayının alfabetik sıralamasını alıyor

value = numbers.sort();

value = numbers.sort(function(x,y){//Küçükten büyüğe
    return x - y;
});

value = numbers.sort(function(x,y){//Büyükten Küçüğe
    return y-x;
});

console.log(value);
