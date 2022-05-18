const { User } = require("../../models");
module.exports = {
  resource: User,
  options: {
    properties: {
      id: {
        isDisabled: true,
        isVisible: {
          show: true,
          edit: false,
          list: false,
          filter: false,
        },
      },
      email: {
        type: "email",
      },
      name: {
        isTitle: true,
      },
      password: {
        type: "password",
      },
      createdAt: {
        isVisible: { show: true, edit: false, list: false, filter: true },
      },
      updatedAt: {
        isVisible: { show: true, edit: false, list: false, filter: true },
      },
    },
    actions: {
      new: {
        after: async (response) => {
          if (response.record && response.record.errors) {
            if (response.record.errors.email.kind === "not_unique") {
              response.record.errors.email = {
                ...response.record.errors.email,
                message: "Email Already Exists",
              };
            }
          }
          return response;
        },
      },
    },
  },
};
