import axios from "axios";
import { USER_LOCAL } from "../utils/constant";

const api = axios.create({
  baseURL: `http://localhost:3000/tuan-nguyen-blogs/v1`,
});

api.interceptors.request.use(
  function (config) {
    const tokenUser = localStorage.getItem(USER_LOCAL.KEY);
    if (tokenUser) {
      config.headers.Authorization = `Bearer ${tokenUser.trim()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
