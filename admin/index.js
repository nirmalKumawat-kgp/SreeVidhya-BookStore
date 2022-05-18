const db = require("../models");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");
const { authenticate, sessionStorage } = require("./utils");
const {
  UserResource,
  BookResource,
  BookCategoryResource,
  OrderResource,
  AddressResource,
} = require("./resources/index");

AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  rootPath: "/admin",
  loginPath: "/admin/login",
  resources: [
    UserResource,
    BookResource,
    BookCategoryResource,
    OrderResource,
    AddressResource,
  ],
  branding: {
    companyName: "SreeVidhya",
    softwareBrothers: false,
    logo: false,
  },
  locale: {
    translations: {
      messages: {
        loginWelcome: "",
      },
      labels: {
        loginWelcome: "SreeVidya Admin Portal",
      },
    },
  },
});
adminJs.watch();
//router for authentication as well as Admin Dasboard
const router = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    cookiePassword: "admin-panel-tutorial",
    authenticate,
  },
  null,
  sessionStorage
);
module.exports = router;
