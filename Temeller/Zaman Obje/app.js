let value;

const now = new Date(); //Şuanki zamanı almamızı sağlar


const date1 = new Date("4-21-1998 05:15:00");

const date2 = new Date("April 21 1998")

const date3 = new Date("4/21/1998");

value = date1;

value = date1.getMonth(); // Normalde 4. ayı fakat 0 başladığı için 3. ayı olarak gösterir
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();


date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1990);
date1.setHours(0); //Gece 12 yi gösterir
date1.setMinutes(5); //12.15 te doğduk
date1.setSeconds(30);


value = date1;


console.log(value);