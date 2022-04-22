import axios from "axios";

const { NODE_ENV } = process.env;
export default axios.create({
  baseURL:
    NODE_ENV === "production"
      ? "https://sreevidhya.herokuapp.com/api/"
      : "http://localhost:3006/api/",
});
