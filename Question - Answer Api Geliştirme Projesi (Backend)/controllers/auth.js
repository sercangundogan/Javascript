// User Modelini dahil ediyoruz.
const User = require('../models/User')

// Merkezi Custom Error Class'ını dahil ediyoruz.
const CustomError  = require("../helpers/error/CustomError")

// Handler Kütüphanesini dahil ediyoruz.
const asyncErrorWrapper = require("express-async-handler")

// Token içn helper fonksiyonu
const {sendJwtToClient} = require("../helpers/authorization/tokenHelpers")
const {validateUserInput, comparePassword} = require("../helpers/input/inputHelpers")

const sendEmail = require("../helpers/libraries/sendEmail");

const register = asyncErrorWrapper(async (req,res,next) => {
    // POST DATA
    console.log(req.body);

    // Request'ten bilgileri çekiyoruz.
    const {name, email, password, role} = req.body;


    // Async - Await yapıları
    const user = await User.create({
    // name : name,
    // email:  email,
    // password : password
    // Bunun yerine, isimleri aynı olduğu için vermeye de biliriz.
    name,
    email,
    password,
    role
    })

    // Create Edildikten Sonra Token Oluşturma
    sendJwtToClient(user, res);

});

// User Login 
const login = asyncErrorWrapper(async (req, res, next) => {
    // Kullanıcının girdiği bilgileri aldık.
    const {email, password} = req.body;
    // Kullanıcı  var mı?
    if (!validateUserInput(email, password)){
        return next(new CustomError("Please check your inputs", 400))
    }
    // Kullanıcınun bilgilerini databaseden çektik.
    const user = await User.findOne({email}).select("+password");
    // Kullanıcının password'ü girilen password ile eşleşiyor mu
    if (!comparePassword(password, user.password)) {
        return next(new CustomError("Please check your credentials", 400))
    }
    // Token'ı kullanıcıya gönderiyoruz.
    sendJwtToClient(user, res);

});

const logout = asyncErrorWrapper(async (req, res, next) => {
    const {NODE_ENV} = process.env;

    return res.status(200)
    .cookie({
        httpOnly :true,
        expires : new Date(Date.now()),
        securr : NODE_ENV ==="development" ? false: true
    })
    .json({
        success: true,
        message: "Logout Successful"
    });
});


const getUser = (req, res, next) => {
    res.json({
        success : true,
        message : {
            id : req.user.id,
            name : req.user.name
        }
    });
};

const imageUpload = asyncErrorWrapper(async (req, res, next) => {
    // Image Upload Success
    const user = await User.findByIdAndUpdate(req.user.id, {
        "profile_image": req.savedProfileImage
    },{
        // Güncellenmiş Kullanıcı gelmesini istiyorsak
        new : true,
        // Validator'larımızın bir daha çalışmasını istiyoruz.
        runValidators : true
    })
    res.status(200)
    .json({
        success : true,
        message: "Image Upload Successful",
        data : user
    });
});   

// Forgot Password
const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
    const resetEmail = req.body.email;
    const user = await User.findOne({email : resetEmail});
    if (!user) {
        return next(new CustomError("There is no user with that email"), 400)
    } 
    const resetPasswordToken = user.getResetPasswordTokenFromUser();
    await user.save();
    
    console.log("Mongo DB Değiştirildi.")
    return res.json({
        success : false,
        message : "Bu koda MongoDB'den bakabilirsin, Mail sistemi çalışmadı koddaki."
    })
    // EMAİL GÖNDERMEK
    // const resetPasswordUrl = `http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${resetPasswordToken}`
    
    // const emailTemplate = `
    // <h3>Reset Your Password</h3>
    // <p>This <a href  = '${resetPasswordUrl}' target = '_blank'>link</a> will expire in 1 hour</p>
    // `

    // try {
    //     await sendEmail({
    //         from : process.env.SMTP_USER,
    //         to : resetEmail,
    //         subject : "Reset Your Password", 
    //         html : emailTemplate
    //     });
    //     return res.status(200).json({
    //         success : true,
    //         message : "Token Sent To Your Email"
    //     })
    // }
    // catch (err) {
    //     user.resetPasswordToken = undefined,
    //     user.resetPasswordExpire = undefined,
    //     console.log(err);
    //     await user.save();

    //     return next(new CustomError("Email Could Not Be Sent", 500))
    // }
  
});


const resetPassword =asyncErrorWrapper(async (req, res, next) => {
    const {resetPasswordToken} = req.query;
    const {password} = req.body;
    if(!resetPasswordToken) {
        return next(new CustomError("Plase provide a valid token",400));
    }
    let user = await User.findOne({
        resetPasswordToken : resetPasswordToken,
        // Henüz token expire edilmemişse
        resetPasswordExpire : {$gt : Date.now()}
    })

    if(!user) {
        return next(new CustomError("Invalid Token or Session Expired", 404))
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return res.status(200)
    .json({
        success : true,
        message : "Reset Password Process Successful"
    });
});

const editDetails = asyncErrorWrapper(async (req, res, next) => {
    const editInformation = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, editInformation,{
        new : true,
        runValidators : true
    });
    return res.status(200)
    .json({
        success : true,
        data : user
    })
});

module.exports = {
    register,
    login,
    getUser,
    logout,
    imageUpload,
    forgotPassword,
    resetPassword,
    editDetails
}