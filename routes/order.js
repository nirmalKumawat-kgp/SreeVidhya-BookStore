const express = require("express");
const { addOrder, getAllOrders } = require("../controllers/order");
const { isAuth } = require("../middleware/auth");
const router = express.Router();

router.post("/addOrder", isAuth, addOrder);
router.get("/getAllOrders", getAllOrders);
module.exports = router;
