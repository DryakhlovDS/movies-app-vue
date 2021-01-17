import axios from "axios";
import intercenpters from "./intercenpters";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

intercenpters(instance);

export default instance;
