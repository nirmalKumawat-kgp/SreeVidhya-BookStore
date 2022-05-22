const { Cart, CartItem } = require("../models");
const { Book } = require("../models");
const ErrorResponse = require("../utils/errorResponse");
exports.getCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ where: { UserId: req.user.id } });
    if (cart) {
      let cartitem = await CartItem.findAll({ where: { CartId: cart.id } });

      res.status(200).json({ success: true, data: cartitem });
    }
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
};
exports.addCartItem = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ where: { UserId: req.user.id } });
    if (cart) {
      let book = await Book.findByPk(req.body.BookId);

      // await cart.addBook(book, { through: { quantity: 2 } });
      let cartitem = await CartItem.findOne({
        where: { CartId: cart.id, BookId: req.body.BookId },
      });

      if (cartitem) {
        return next(new ErrorResponse("Already Added to Cart", 200));
      }
      cartitem = await CartItem.create({
        BookId: req.body.BookId,
        CartId: cart.id,
        quantity: 1,
      });
      console.log(cartitem);
      await cartitem.save();
      res.status(200).json({ success: true, data: cartitem });
    }
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
};
//remove cart item
exports.removeCartItem = async (req, res, next) => {
  const { BookId } = req.params;
  try {
    let cartItem = await CartItem.findOne({ where: { BookId: BookId } });
    if (cartItem) {
      cartItem.destroy();
    }
    res
      .status(200)
      .json({ success: true, message: "Item Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

//update cart item
exports.updateCartItem = async (req, res, next) => {
  const { BookId, CartId, quantity } = req.body;

  try {
    let cartItem = await CartItem.findOne({ where: { BookId: BookId } });
    if (!cartItem) {
      next(new ErrorResponse("The Item is not present", 200));
    }
    if (cartItem) {
      await cartItem.update({ quantity: quantity });
      return res
        .status(200)
        .json({ success: true, message: "The item is updated" });
    }
  } catch (error) {
    next(error);
  }
};
// to get cost of cart
exports.getCartCost = async (req, res, next) => {
  const { id } = req.user;
  const cart = await Cart.findOne({ where: { UserId: id } });
  let cost = null;
  let cartitem = [];
  if (cart) {
    cartitem = await CartItem.findAll({ where: { CartId: cart.id } });
  }
  let subtotal = 0,
    discount = 0,
    total = 0;
  if (cartitem) {
    await Promise.all(
      cartitem.map(async (item, index) => {
        await Book.findByPk(item.BookId).then((response) => {
          subtotal += response.originalPrice * item.quantity;
          discount +=
            (response.originalPrice - response.discountPrice) * item.quantity;
          total += response.discountPrice * item.quantity;
        });
      })
    );

    res
      .status(200)
      .json({ success: true, data: { subtotal, discount, total } });
  }
};
