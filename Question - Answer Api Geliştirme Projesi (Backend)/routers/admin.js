const express = require("express");
const router = express.Router();
const {getAccessToRoute, getAdminAccess} = require("../middlewares/authorization/auth");
const {blockUser, deleteUser} = require("../controllers/admin")
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers")


router.use([getAccessToRoute, getAdminAccess])

// Block User
router.get("/block/:id",checkUserExist, blockUser)

// Delete User
router.delete("/delete/:id", checkUserExist, deleteUser)






module.exports = router;