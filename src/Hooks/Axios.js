import axios from "axios";

const baseURL = "https://ecommerce.monzeryshop.shop/api/";
const lang = localStorage.getItem("i18nextLng");

const privateAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": lang,
  },
});

const Axios = axios.create({
  baseURL,
  headers: {
    "Accept-Language": lang,
  },
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export { privateAxios, Axios };
