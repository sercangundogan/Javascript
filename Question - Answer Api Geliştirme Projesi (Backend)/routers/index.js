const express = require('express');

const router = express.Router();

// question.js'yi dahil ediyoruz
const question = require("./question")

// auth.js'yi dahil ediyoruz
const auth = require("./auth")

const user = require("./user")
const admin = require("./admin")


// /api/questions requesti geldi
router.use("/questions", question)

// /api/auth requesti geldi
router.use("/auth", auth)

router.use("/users", user)
router.use("/admin", admin)
// Dışarı aktarıyoruz - Server.js 'de kullanabilmek için.
module.exports = router;