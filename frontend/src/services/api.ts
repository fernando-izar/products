import axios from "axios";
import { jwtDecode } from "jwt-decode";

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiUrl || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiRefresh = axios.create({
  baseURL: apiUrl || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  try {
    if (!config.headers.Authorization) {
      const access = localStorage.getItem("access");
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
    }
    return config;
  } catch (error) {
    return config;
  }
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("access");

  if (token) {
    const { exp } = jwtDecode(token);

    if (Date.now() >= exp! * 1000 - 30000) {
      const refresh = localStorage.getItem("refresh");
      const { data } = await apiRefresh.post("/api/token/refresh/", {
        refresh,
      });
      localStorage.setItem("access", data.access);
      config.headers.Authorization = `Bearer ${data.access}`;
    }
  }
  return config;
});

api.interceptors.response.use();

export default api;
