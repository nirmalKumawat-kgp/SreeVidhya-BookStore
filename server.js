require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3006;
const errorHandler = require("./middleware/error");
global.__basedir = __dirname;

const models = require("./models");

app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", require("./routes/auth"));

app.use("/api/books", require("./routes/books"));

app.use("/api/cart", require("./routes/cart"));

app.use("/api/order", require("./routes/order"));

app.use("/api", require("./routes/user"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);

  models.sequelize
    .sync()
    .then(() => {
      // Logging after promise resolve
      console.log("Main DB sequelized\n");
    })
    .catch((err) => {
      // logging if there is any error while sequelizing
      console.log(err.message);
    });
});
process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => {
    process.exit(1);
  });
});
