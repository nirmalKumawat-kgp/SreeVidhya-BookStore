const { BookCategory } = require("../../models");
module.exports = {
  resource: BookCategory,
  options: {
    properties: {},
    actions: {
      list: { isAccessible: false },
    },
  },
  
};
