const express = require("express");

const app = express();

const PORT = 5000;

// app.listen(PORT, () => {
//     console.log("Server Started, PORT: " + PORT)
// })

// Get Request
const users = [
    {id: 1, name: "Mustafa Murat Coşkun", place: "Ankara"},
    {id: 2, name: "Sercan Gündoğan", place: "İstanbul"}
];

// app.get("/users", (req,res,next) => {
//     res.send("Hello Express")
// });

// Bundan sonra tarayıcıda "http://localhost:5000/users" adresini girip kontrol edebilirsin.


// app.get("/users", (req,res,next) => {
//     res.json(users);
// });
// users'ı json objesi olarak döneriz.



// Access Kontrolü - Middleware
const {accessControl} = require("./middleware");

// Bu Kontroller route'lardan önce kontrol edilmesi gerekiyor.
// Tıpkı django mantığındaki gibi fonksiyonlardan hemen önce
// app.use(accessControl);
// app.get("/users", (req,res,next) => {
//     res.json(users);
// });
// Konsola gerekli yazı yazıldı ve önce middleware çalıştı.

// Eğer aynı yere birden fazla request varsa ve sadece
// bir tanesinde kontrol edilmek isteniyorsa
// Bu örnekte sadece /users'a özgü yazmış olduk
// app.get("/users", accessControl, (req,res,next) => {
//         res.json(users);     
// })

// app.get("/products", (req,res,next) => {
//     res.send("Products");
// });


// Birden fazla Middleware Kullanmak
const {defaultMiddleware} = require("./middleware")
app.get("/users", [accessControl,defaultMiddleware], (req,res,next) => {
    res.json(users);     
})

app.get("/products", (req,res,next) => {
res.send("Products");
});





// POST REQUEST
// app.post("/users",(req,res,next) => {
//     res.json({
//         success: true,
//         data: "Post Request"
//     })
// })


// PUT REQUEST
// app.put("/users",(req,res,next) => {
//     res.json({
//         success: true,
//         data: "Put Request"
//     })
// })



// DELETE REQUEST
// app.delete("/users",(req,res,next) => {
//     res.json({
//         success: true,
//         data: "Delete Request"
//     })
// })



// POST REQUEST DETAIL(VERI EKLEMEK)
app.use(express.json());

app.post("/users",(req,res,next) => {
    // Postman'de oluşturduğumuz body'e oluşmak istiyoruz.
    // Fakat çalıştırdığımızda undefined geldi o yüzden
    // Üstteki app.use(express.json()) u dahil ettik 
    // Artık veriler konsolda json olarak gözüküyor
    console.log(req.body)
    const user = req.body;
    // Array'imize yeni kullanıcıyı eklemek
    users.push(user)
    // En son users arrayimizi son haliyle gönderiyoruz.
    res.json({
        success: true,
        data: users
    })
})



// PUT REQUEST DETAIL (VERI GUNCELLEME)
app.put("/users/:id",(req,res,next) => {
    // Gelen id'yi alıp konsola yazdırıyoruz.
    // console.log(req.params.id);

    // Gelen id'yi stringten integer'a çeviriyoruz.
    const id = parseInt(req.params.id);

    // Gelen id'ye ait user'ı bulmak ve güncellemek
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i] = {
                // User'ın bilgilerini alıyoruz
                // Sadece neresi güncellenecekse orayı güncelliyoruz
                ...users[i],
                ...req.body
            };
        }
    }
    res.json({
        success: true,
        data: users
    });
});



// DELETE REQUEST DETAIL 
app.delete("/users/:id",(req,res,next) => {
    // Gönderilen request'teki id değerini integer'a çevirdik.
    const id = parseInt(req.params.id);

    // Gelen id'ye ait user'ı bulmak ve silmek
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            // Kullanıcı Bulundu, Silme İşlemi
            // Splicetaki i indexi ifade ediyor, 1 kaç tane sileceğimizi
            users.splice(i, 1);
        }
    }
    res.json({
        success: true,
        data: users
    })
})






// Application'ı yani serverimizi çalıştırmak. (Flask Gibi)
app.listen(PORT, () => {
    console.log("Server Started, PORT: " + PORT)
})
