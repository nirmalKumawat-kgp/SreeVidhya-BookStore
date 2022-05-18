module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      notNull: true,
      allowNull: false,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        "Scheduled for Shipping",
        "In Transit",
        "Out For Delivery",
        "Delivered",
      ],
      allowNull: false,
      notNull: true,
      defaultValue: "Scheduled For Pickup",
    },
  });

  Order.associate = (models) => {
    Order.belongsToMany(models.Book, { through: "OrderItem" });
    Order.belongsTo(models.User);
    Order.belongsTo(models.Address);
  };

  return Order;
};
