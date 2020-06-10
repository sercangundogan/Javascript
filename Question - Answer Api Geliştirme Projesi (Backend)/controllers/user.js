const User = require("../models/User")
const CustomError  = require("../helpers/error/CustomError")
const asyncErrorWrapper = require("express-async-handler")

// Kullanıcı verilen id'ye göre seçmek
const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
    const {id} = req.params;

    const user = await User.findById(id);

    return res.status(200).json({
        succees: true,
        data : user
    })
})

// Bütün kullanıcıları seçmek
const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
    // Herhangi bir değer girilmezse, hepsi seçilir.
    const users = await User.find()

    return res.status(200)
    .json(res.queryResults)
})

module.exports = {
    getSingleUser,
    getAllUsers
}