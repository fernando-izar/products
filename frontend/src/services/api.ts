import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiUrl || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
