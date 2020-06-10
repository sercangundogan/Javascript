// Mongoose Dahil Etmek
const mongoose = require("mongoose");

// Hashlemek için gerekli kütüphaneyi dahil ediyoruz.
const bcrypt = require("bcryptjs");

// Mongoose'daki Schema'yı kullanıyoruz.
const Schema = mongoose.Schema;

// jwt token kütüphanesini Dahil Etmek
const jwt = require("jsonwebtoken");

// crypto
const crypto = require("crypto");

const Question = require("./Question")

// User Model
const UserSchema = new Schema({
    name : {
        type : String,
        // Eğer true değilse mesajı döner
        required : [true, "Please provide a name"]
    },
    email : {
        type : String,
        required : [true, "Please provide an email"],
        // Sadece bir kere aynı emaille kayıt olunabilir.
        unique : true,
        // Email belirtilen regx ile eşleşmeli
        match : [
            // İnternetten alındı
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            // Eğer eşleşme olmazsa
            "Please provide a valid email"
        ]
    },
    role : {
        type : String,
        default : "user",
        // Bu rolün sadece 2 tane değeri olabilir
        enum : ["user", "admin"]
    },
    password : {
        type : String,
        minlength : [6, "Please provide a password with min length 6"],
        required : [true, "Please provide a password"],
        // Görünmemesi için
        select : false,


    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    title : {
        type : String
    },
    about : {
        type : String
    },
    place : {
        type : String
    },
    website : {
        type : String
    },
    profile_image : {
        type : String,
        default : "default.jpg"
    },
    blocked : {
        type : Boolean,
        default : false
    },
    resetPasswordToken : {
        type : String
    },
    resetPasswordExpire : {
        type : Date
    }
});

UserSchema.methods.getResetPasswordTokenFromUser = function() {
    const randomHexString = crypto.randomBytes(15).toString("hex");

    const resetPasswordToken = crypto
    .createHash("SHA256")
    .update(randomHexString)
    .digest("hex")
    const RESET_PASSWORD_EXPIRE = process.env.RESET_PASSWORD_EXPIRE;
    this.resetPasswordToken = resetPasswordToken;
    this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);
    return resetPasswordToken;
}
// UserSchema Methods
UserSchema.methods.generateJwtFromUser = function(){
    
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    const JWT_EXPIRE = process.env.JWT_EXPIRE;
    const payload = {
        id : this._id,
        name : this.name        
    }

    const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn : JWT_EXPIRE
    });
    return token;
};

// Modelimizi kaydetmeden önce(pre etiketi ile)
UserSchema.pre("save", function(next) {
    // Parola Değişmemişse
    if (!this.isModified("password")) {
        next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) next(err);
        // Store hash in your password DB.
        this.password = hash;
        next();
    });
});
})

// post işlemi, herhangi bir database işlemi olduktan sonra çalışır
// Eğer bir kullanıcı silinirse, onun oluşturduğu soruları da silicez.
UserSchema.post("remove", async function(){
    await Question.deleteMany({
        user : this._id
    });
})



// Dışarıda kullanılması için
module.exports = mongoose.model("User", UserSchema);

// Database'de User adında yeni bir collection oluşacak.

