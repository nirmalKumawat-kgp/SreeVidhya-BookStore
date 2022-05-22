require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3006;
const errorHandler = require("./middleware/error");
global.__basedir = __dirname;

const db = require("./models");

app.use(cors());
//routes for admin dashboard always should be before express.json and any other route
app.use("/admin", require("./admin/index"));

app.use("/admin/login", require("./admin/index"));

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", require("./routes/auth"));

app.use("/api/books", require("./routes/books"));

app.use("/api/cart", require("./routes/cart"));

app.use("/api/order", require("./routes/order"));

app.use("/api", require("./routes/user"));

//to serve website if enviornment is production

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//to catch any error and then log it
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);

  db.sequelize
    .sync()
    .then(() => {
      // Logging after promise resolve
      console.log("Main DB sequelized\n");
    })
    .catch((err) => {
      // logging if there is any error while sequelizing
      console.log("🚀 ~ file: server.js ~ line 51 ~ server ~ err", err);
    });
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => {
    process.exit(1);
  });
});
