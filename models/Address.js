module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
        notNull: false,
        allowNull: false,
      },
      PhoneNumber: {
        type: DataTypes.STRING,
        notNull: false,
        allowNull: false,
      },
      AddressLine1: {
        type: DataTypes.STRING,
        notNull: false,
        allowNull: false,
      },
      AddressLine2: {
        type: DataTypes.STRING,
        notNull: true,
        allowNull: true,
      },
      State: {
        type: DataTypes.STRING,
        notNull: true,
      },
      City: {
        type: DataTypes.STRING,
        notNull: true,
      },
      Landmark: {
        type: DataTypes.STRING,
        notNull: true,
      },
      Pincode: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    {
      tableName: "Addresses",
    }
  );
  Address.associate = (models) => {
    Address.belongsTo(models.User);
    Address.hasMany(models.Order);
  };
  return Address;
};
