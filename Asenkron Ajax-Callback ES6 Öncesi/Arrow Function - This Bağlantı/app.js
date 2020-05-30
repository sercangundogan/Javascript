const person = {
    age:25,

    // tellAge : function(){
    //     console.log(this) // Objemizin içindeki bir fonksiyonda kullanıldığı için person'u gösterir.
    //     console.log(this.age);
    // }.bind(this) // Bu komutla, this'i windows objesine çekeriz.

    // Buradaki this, fonksiyon içinde olmadığımız için window objesini gösterir.
    

    // Arrow Function yazdık, içindeki this yine fonksiyon içinde olmasına rağmen window objesini gösterir.
    tellAge: () =>  {
        console.log(this);
        console.log(this.age)
    }
}



person.tellAge();