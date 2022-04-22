const express = require("express");
const { getUser, getAllUsers } = require("../controllers/user");
const { isAuth } = require("../middleware/auth");
const router = express.Router();

router.get("/user/", isAuth, getUser);
router.get("/user/getAllUsers", getAllUsers);
module.exports = router;
