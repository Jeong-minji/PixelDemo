import axios from "axios";

var getCookie = function (name: string) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ADDRESS,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

let TOKEN: string | null = "";

if (typeof window !== "undefined") {
  TOKEN = getCookie("token");
}

// API 요청 전
axiosInstance.interceptors.request.use(
  (config: any) => {
    if (TOKEN) config.headers["Authorization"] = "Bearer " + TOKEN;
    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

// API 요청 후
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
