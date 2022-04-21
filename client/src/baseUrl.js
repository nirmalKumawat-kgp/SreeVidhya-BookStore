import axios from "axios";

const { NODE_ENV, NODE_ENV_DEV } = process.env;

const inDevelopment = NODE_ENV === "development";
const inProduction = NODE_ENV === "production";
const inStaging = NODE_ENV_DEV === "staging";
export default axios.create({
  baseURL: `https://sreevidhya.herokuapp.com/api/`,
});
