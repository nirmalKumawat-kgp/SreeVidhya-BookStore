const { Order } = require("../../models");

module.exports = {
  resource: Order,
  options: {
    properties: {
      updatedAt: {
        isVisible: {
          edit: false,
          show: true,
          list: false,
          new: false,
          filer: false,
        },
      },
    },
  },
};
