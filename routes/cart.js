const express = require("express");
const {
  getCart,
  addCartItem,
  updateCartItem,
  getCartCost,
  removeCartItem,
} = require("../controllers/cart");
const { isAuth } = require("../middleware/auth");
const router = express.Router();

router.get("/", isAuth, getCart);
router.get("/getCartCost", isAuth, getCartCost);
router.post("/addItem", isAuth, addCartItem);
router.delete("/removeItem/:BookId", isAuth, removeCartItem);
router.put("/updateItem", isAuth, updateCartItem);

module.exports = router;
