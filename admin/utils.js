const bcrypt = require("bcrypt");
const { User } = require("../models");
const redis = require("redis");
const session = require("express-session");
let RedisStore = require("connect-redis")(session);

const createClient = async () => {
  let redisClient = await redis.createClient();
  const sessionStorage = {
    store: new RedisStore({
      client: redisClient,
    }),
    secret: "this is secret",
    resave: false,
  };
  return sessionStorage;
};
let sessionStorage;
createClient().then((response) => (sessionStorage = response));
async function authenticate(email, password) {
  const userRecord = await User.findOne({
    where: { email },
  });
  if (userRecord) {
    const matched = await bcrypt.compare(password, userRecord.password);
    if (matched) {
      return userRecord;
    }
  }
  return false;
}
module.exports = {
  authenticate,
  sessionStorage,
};
