// api/auth router'ları buraya gelmeli

const express = require("express");

const router = express.Router();

const { register, getUser, login, logout, forgotPassword, resetPassword, editDetails } = require('../controllers/auth');

const {getAccessToRoute} = require("../middlewares/authorization/auth");

const profileImageUpload = require("../middlewares/libraries/profileImageUpload");

const {imageUpload} = require("../controllers/auth")





router.post("/register", register);

// router.get("/tokentest", getAccessToRoute, tokentest);

router.get("/profile", getAccessToRoute, getUser)

router.post("/login", login)

router.get("/logout", getAccessToRoute, logout)

router.post("/upload", [getAccessToRoute, profileImageUpload.single("profile_image")], imageUpload)

router.post("/forgotpassword", forgotPassword)

router.put("/resetpassword", resetPassword);

router.put("/edit", getAccessToRoute,editDetails);

// Dışarı aktarıyoruz - Server.js 'de kullanabilmek için.
module.exports = router;