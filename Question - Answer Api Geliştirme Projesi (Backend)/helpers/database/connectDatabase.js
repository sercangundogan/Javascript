// Mongoose Kütüphanesi dahil ediliyor.
const mongoose = require('mongoose');

const connectDatabase = () => {
    // Hatalardan Kurtulmak için
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    
    // Bağlantı 
    mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDb Connection Successful")
    })
    .catch(err => {
        console.error(err)
    })
};

// server.js dosyasında kullanmak için dışarı aktarıyoruz.
module.exports = connectDatabase