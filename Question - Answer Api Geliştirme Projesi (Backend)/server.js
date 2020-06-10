// Express'i dahil ediyoruz
const express = require("express")

// Config dosyasını dahil ediyoruz
const dotenv = require("dotenv");

// Database function'ını dahil ediyoruz
const connectDatabase = require("./helpers/database/connectDatabase")

// Error Handler'ı dahil ediyoruz
const customErrorHandler = require("./middlewares/errors/customErrorHandler")

// Dosya yolunu belirliyoruz.
const path = require("path");

// Routers klasörünü tanımlıyoruz
const routers = require("./routers");

// Burdaki requestleri routers'ta kullanmak için o dosyaları dahil ediyoruz.
// Question Route
const question = require("./routers/question");

// Auth Route
const auth = require("./routers/auth");

// Environment Variables -> Config Dosyalarını dahil ediyoruz
dotenv.config({
    // Config dosyasının yolu
    path : "./config/env/config.env"
});

// Database(MongoDB) Connection
connectDatabase();

// Express'ten app'imizi oluşturuyoruz.
const app = express();

// Express - Body Middleware
app.use(express.json());

// Statik Dosyaları Tanımlamak
app.use(express.static(path.join(__dirname, "public")));

// Port değerini beliriliyoruz.
// Başka bir yerde, 5000 portu geçerli olmayabilir.
// O yüzden o ortamdaki PORT'u da kullanabiliriz.
const PORT = 5000 || process.env.PORT;


// Get Request ( Anasayfa )
app.get("/", (req,res) => {
    res
    .json({
        success : true 
    })
});


// Requestleri routes klasöründe oluşturduk, bunlar denemeydi.

// Get Request ( api/questions )
// app.get("/api/questions", (req,res) => {
//     res.send("Questions Home Paege")
// })

// Get Request ( api/questions/delete)
// app.get("/api/questions/delete", (req,res) => {
//     res.send("Questions Delete Paege")
// });

// Get Request ( api/auth )
// app.get("/api/auth", (req,res) => {
//     res.send("Auth Home Paege")
// })

// Get Request ( api/auth/register )
// app.get("/api/auth/register", (req,res) => {
//     res.send("Auth Register Paege")
// })




// Bunları da başka bir dosyada kullanıcaz ve modüler hale getiricez
// Dosyanın ismi -> index.js
// Routers Middleware
// app.use("/api/questions", question);
// app.use("/api/auth", auth);

// Modüler Hali
app.use("/api", routers);

// Error Handler
app.use(customErrorHandler);

// Serveri Çalıştırıyoruz ve Port bilgisini konsola yazdırıyoruz
app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
})
