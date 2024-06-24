import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/tuan-nguyen-blogs/v1`,
});

api.interceptors.request.use(
  function (config) {
    const tokenUser = localStorage.getItem("token_user");
    if (tokenUser) {
      config.headers.Authorization = `bearer ${tokenUser.trim()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
