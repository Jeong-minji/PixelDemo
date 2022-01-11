import axios from "axios";

// Window 객체 생성 시 TOKEN 처리
let TOKEN: string | null = "";

if (typeof window !== "undefined") {
  TOKEN = localStorage.getItem("token");
}

// BaseURL 설정
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ADDRESS,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// API 요청 전
axiosInstance.interceptors.request.use(
  (config: any) => {
    TOKEN ? (config.headers["Authorization"] = "Bearer " + TOKEN) : null;
    console.log(config);
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
export { TOKEN };
