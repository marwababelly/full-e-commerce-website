import axios from "axios";

// غيرنا المسار لـ JSONPlaceholder
const baseURL = "https://jsonplaceholder.typicode.com/";
const lang = localStorage.getItem('i18nextLng');

const privateAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json", // غيرناها لـ JSON
    "Accept-Language": lang
  },
});

const Axios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": lang
  },
});

// Add a request interceptor to privateAxios
privateAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { privateAxios, Axios };