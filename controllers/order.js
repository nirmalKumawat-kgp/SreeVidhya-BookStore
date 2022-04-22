const { Address, Order, User } = require("../models");
exports.addOrder = async (req, res, next) => {
  const user = req.user;
  const { address, cartDetails } = req.body;
  try {
    let addressInstance = await Address.create(address);
    await addressInstance.save();

    let order = await Order.create({
      AddressId: addressInstance.id,
      UserId: user.id,
    });
    await order.save();

    res.status(200).json({ success: true, data: { OrderId: order.id } });
  } catch (error) {
    next(error);
  }
};
exports.getAllOrders = async (req, res, next) => {
  try {
    let orders = await Order.findAll();
    let customerOrders = [];
    await Promise.all(
      orders.map(async (order, index) => {
        await User.findByPk(order.UserId).then((response) => {
          customerOrders.push({
            CustomerName: response.name,
            CustomerEmail: response.email,
            ...order.dataValues,
          });
        });
      })
    );

    await res.status(200).json({ success: true, data: customerOrders });
  } catch (error) {
    nezt(error);
  }
};
